'use strict';
  /*
   *  Convert hex to base64
   *  The string:
   *  49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d
   *  Should produce:
   *  SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t
   */

module.exports = function (){
  const hexString = '49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d';
  const base64String = new Buffer(hexString, 'hex').toString('base64') //
  console.log(base64String);
};
