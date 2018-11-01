require("@babel/polyfill");

import feType from '../src/index';

var assert = require('assert');

describe('fefeType', function () {
  it('undefined', function () {
    assert.equal(feType(undefined),'undefined');
  });
  it('null', function () {
    assert.equal(feType(null),'null');
  });
  it('number', function () {
    assert.equal(feType(10),'number');
  });
  it('boolean', function () {
    assert.equal(feType(true),'boolean');
    assert.equal(feType(false),'boolean');
  });
  it('string', function () {
    assert.equal(feType('test'),'string');
  });
  it('Array', function () {
    assert.equal(feType([1, 2]),'Array');
  });

  it('Object', function () {
    assert.equal(feType({name: 'Object'}),'Object');
  });
  it('Date', function () {
    assert.equal(feType(new Date()),'Date');
  });
  it('RegExp', function () {
    assert.equal(feType(new RegExp()),'RegExp');
  });
  it('自定义的构造函数', function () {
    function CustomfeType() {
  };
    assert.equal(feType(new CustomfeType()),'CustomfeType');
  });
})
