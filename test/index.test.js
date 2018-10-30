import type from '../src/index';

describe('type', () => {
  test('undefined', () => {
    expect(type(undefined)).toBe('undefined');
  });
  test('null', () => {
    expect(type(null)).toBe('null');
  });
  test('number', () => {
    expect(type(10)).toBe('number');
  });

  test('boolean', () => {
    expect(type(true)).toBe('boolean');
    expect(type(false)).toBe('boolean');
  });

  test('string', () => {
    expect(type('test')).toBe('string');
  });

  test('Array', () => {
    expect(type([1, 2])).toBe('Array');
  });

  test('Object', () => {
    expect(type({name: 'Object'})).toBe('Object');
  });

  test('Date', () => {
    expect(type(new Date())).toBe('Date');
  });

  test('RegExp', () => {
    expect(type(new RegExp())).toBe('RegExp');
  });

  test('自定义的构造函数', () => {
    function CustomType() {
    };
    expect(type(new CustomType())).toBe('CustomType');
  });
});
