'use strict';

exports.handle = (event, context) => {
  console.info('hello');
  context.succeed();
};
