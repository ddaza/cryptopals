'use strict';
const yargs = require('yargs-parser');
const _ = require('lodash');
const challenge1 = require('./challenge1.js');

(function () {
  const args = yargs(process.argv.slice(2));
  const challenge = _.get(args, 'challenge');

  const challengeFunctions = {
    '1': () => challenge1()
  };

  if (challengeFunctions[challenge]) {
    challengeFunctions[challenge]();
  } else {
    console.log('not valid challenge');
  }
}());
