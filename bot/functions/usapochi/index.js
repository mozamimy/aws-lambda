'use strict';

const AWS = require("aws-sdk");

const URI = process.env.URI;
const UA = process.env.UA;
const SNS_TOPIC_ARN = process.env.SNS_TOPIC_ARN;

function notify(subject, message, snsTopicArn) {
  const sns = new AWS.SNS();
  const params = {
    Subject: subject,
    Message: message,
    TopicArn: snsTopicArn,
  };

  return sns.publish(params).promise();
}

exports.handle = (event, context) => {
  const params = {
    uri: URI,
    headers: {
      'User-Agent': UA,
    },
  };

  const request = require('request-promise');

  request(params).then((result) => {
    console.info("Succeed to execute usapochi.");
    console.info(result);

    return notify("Succeed to execute usapochi", ":rabbit2: :rabbit2: :rabbit2:", SNS_TOPIC_ARN);
  }).then((result) => {
    console.info(result);
    context.succeed(result);
  }).catch((err) => {
    console.error(err);

    return notify("Failed to execute usapochi", err, SNS_TOPIC_ARN).then().catch((err) => {
      console.info(result);
      context.fail(err);
    }).catch((err) => {
      console.error(err);
      context.fail(err);
    });
  });
};
