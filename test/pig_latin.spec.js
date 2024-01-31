var chai = require('chai');
var expect = chai.expect;
chai.should();

// @ts-expect-error - module resolution
var pigLatin = require('./../pigLatin.js');

describe('Pig Latin', function () {
  it('should be a module that exists', function () {
    expect(pigLatin).to.be.a('function');
  });
});


describe('Unpig Latin', function () {
  it('should be a module that exists', function () {
    expect(pigLatin).to.be.a('function');
  });
});