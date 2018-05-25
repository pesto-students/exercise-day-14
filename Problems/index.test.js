const {
  memoize,
  mergeAll,
  nthArg,
  oneThroughSix,
  omit,
} = require('.');

describe('1 memoize', () => {
  it('memoizes "false" return values', () => {
    let count = 0;
    const inc = memoize((n) => {
      count += 1;
      return n + 1;
    });
    expect(inc(-1)).toBe(0);
    expect(inc(-1)).toBe(0);
    expect(inc(-1)).toBe(0);
    expect(count).toBe(1);
  });

  it('works with 2 arguments', () => {
    let called = 0;

    const add = memoize((x, y) => {
      called += 1;
      return x + y;
    });

    expect(add(1, 2)).toBe(3);
    expect(called).toBe(1);

    expect(add(1, 2)).toBe(3);
    expect(called).toBe(1);

    expect(add(1, 3)).toBe(4);
    expect(called).toBe(2);
  });
});

describe('2 mergeAll', () => {
  it('merges a list of objects together into one object', () => {
    expect(mergeAll([{ foo: 1 }, { bar: 2 }, { baz: 3 }])).toEqual({ foo: 1, bar: 2, baz: 3 });
  });

  it('gives precedence to later objects in the list', () => {
    expect(mergeAll([{ foo: 1 }, { foo: 2 }, { bar: 2 }])).toEqual({ foo: 2, bar: 2 });
  });

  it('ignores inherited properties', () => {
    function Foo() {}
    Foo.prototype.bar = 42;
    const foo = new Foo();
    const res = mergeAll([foo, { fizz: 'buzz' }]);
    expect(res).toEqual({ fizz: 'buzz' });
  });
});

describe('3 nthArg', () => {
  it('returns a function which returns its nth argument', () => {
    expect(nthArg(0)('foo', 'bar')).toBe('foo');
    expect(nthArg(1)('foo', 'bar')).toBe('bar');
  });

  it('accepts negative offsets', () => {
    expect(nthArg(-1)('foo', 'bar')).toBe('bar');
    expect(nthArg(-2)('foo', 'bar')).toBe('foo');
    expect(nthArg(-3)('foo', 'bar')).toBe(undefined);
  });

  it('returns a function with length n + 1 when n >= 0', () => {
    expect(nthArg(0).length).toBe(1);
    expect(nthArg(1).length).toBe(2);
    expect(nthArg(2).length).toBe(3);
    expect(nthArg(3).length).toBe(4);
  });

  it('returns a function with length 1 when n < 0', () => {
    expect(nthArg(-1).length).toBe(1);
    expect(nthArg(-2).length).toBe(1);
    expect(nthArg(-3).length).toBe(1);
  });

  it('returns a curried function', () => {
    expect(nthArg(1)('foo', 'bar')).toEqual(nthArg(1)('foo')('bar'));
    expect(nthArg(2)('foo', 'bar', 'baz')).toEqual(nthArg(2)('foo')('bar')('baz'));
  });
});

describe('4 Implementing formula one through six', () => {
  test('should return correct string with formula', () => {
    expect(oneThroughSix(31)).toBe('1 + 23 - 4 + 5 + 6');
    expect(oneThroughSix(71)).toBe('123 + 4 - 56');
    expect(oneThroughSix(-61)).toBe('1 - 23 - 45 + 6');
    expect(oneThroughSix(123456)).toBe('123456');
  });
});


describe('5 omit', () => {
  const obj = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6,
  };

  it('copies an object omitting the listed properties', () => {
    expect(omit(['a', 'c', 'f'], obj)).toEqual({ b: 2, d: 4, e: 5 });
  });

  it('includes prototype properties', () => {
    function F(param) { this.x = param; }
    F.prototype.y = 40;
    F.prototype.z = 50;
    const obj2 = new F(30);
    obj2.v = 10; obj2.w = 20;
    expect(omit(['w', 'x', 'y'], obj2)).toEqual({ v: 10, z: 50 });
  });
});

