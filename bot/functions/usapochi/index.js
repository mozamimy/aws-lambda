'use strict';

const URI = process.env.URI;
const UA = process.env.UA;

exports.handle = (event, context) => {
  const params = {
    uri: URI,
    headers: {
      'User-Agent': UA,
    },
  };

  const request = require('request-promise');

  request(params).then((result) => {
    console.info(result);
    context.succeed(result);
  }).catch((err) => {
    console.err(err);
    context.fail(err);
  });
};
