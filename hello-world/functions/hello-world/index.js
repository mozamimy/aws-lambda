'use strict';

exports.handle = (event, context) => {
  console.log("Hello world");
  context.succeed("Hello world");
};
