var type = require('../src/index');
var assert = require('assert');

describe('feType', function () {
  it('undefined', function () {
    assert.equal(type(undefined),'undefined');
  });
  it('null', function () {
    assert.equal(type(null),'null');
  });
  it('number', function () {
    assert.equal(type(10),'number');
  });
  it('boolean', function () {
    assert.equal(type(true),'boolean');
    assert.equal(type(false),'boolean');
  });
  it('string', function () {
    assert.equal(type('test'),'string');
  });
  it('Array', function () {
    assert.equal(type([1, 2]),'Array');
  });

  it('Object', function () {
    assert.equal(type({name: 'Object'}),'Object');
  });
  it('Date', function () {
    assert.equal(type(new Date()),'Date');
  });
  it('RegExp', function () {
    assert.equal(type(new RegExp()),'RegExp');
  });
  it('自定义的构造函数', function () {
    function CustomType() {
  };
    assert.equal(type(new CustomType()),'CustomType');
  });
})
