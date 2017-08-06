'use strict';

const Slack = require('@slack/client');
const AWS = require('aws-sdk');

const WEBHOOK_URL = process.env.WEBHOOK_URL;

function decrypt(encryptedString) {
  const kms = new AWS.KMS();
  const params = {
    CiphertextBlob: new Buffer(encryptedString, 'base64'),
  };

  return kms.decrypt(params).promise();
}

exports.handle = (event, context) => {
  decrypt(WEBHOOK_URL).then((result) => {
    const subject = event.Records[0].Sns.Subject;
    const message = JSON.parse(event.Records[0].Sns.Message);

    const colorCodes = {
      fatal: "#dc143c",
      warn: "#ffd700",
      info: "#2e8b57",
    };

    const decryptedWebHookURL = result.Plaintext.toString('ascii');
    const webhook = new Slack.IncomingWebhook(decryptedWebHookURL);
    const params = {
      text: message.Text,
      channel: message.Channel,
      username: message.UserName,
      iconEmoji: message.IconEmoji,
      attachments: [
        {
          "color": colorCodes[message.Level],
          "fields": [
            {
              "title": subject,
              "value": message.Message,
              'shrot': false,
            },
          ],
        },
      ],
    };

    webhook.send(params, (err, _) => {
      if (err) {
        throw `ERROR: Failed to post a message: ${event}`;
      } else {
        // do nothing
      }
    });
  }).then((result) => {
    console.info(`Message sent: ${event}`);
    context.succeed(result);
  }).catch((err) => {
    console.error(err);
    context.fail(err);
  });
};
