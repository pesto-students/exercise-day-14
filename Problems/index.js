/* Q1 (*)
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 *      let count = 0;
 *      const factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */

function memoize() {}

/* Q2 (*)
 * Merges a list of objects together into one object.
 *
 *      mergeAll([{ foo:1 }, { bar:2}, { baz:3}]); //=> { foo:1, bar:2, baz:3 }
 *      mergeAll([{ foo:1 }, { foo:2}, { bar:2}]); //=> { foo:2, bar:2 }
 *      mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */

function mergeAll() {}

/* Q3 (*)
 * Returns a function which returns its nth argument.
 *
 *      nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      nthArg(-1)('a', 'b', 'c'); //=> 'c'
 *      nthArg(-1)(a, b, c) = c
 *      nthArg(0)(a, b, c) = a
 *      nthArg(1)(a, b, c) = b
 */

function nthArg() {}

/* Q4
 * Given an integer, create a formula using the numbers 1 through
 * 6, +, and - where each number appears once and in order such
 * that the formula computes to the given integer.
 *
 * For example:
 *  21 = 1 + 2 + 3 + 4 + 5 + 6
 * -10 = 12 + 34 - 56
 *
 * input: Integer
 *
 * output: String of form "<number> <operator> <number>..."
 *         which computes to the input integer.
 *
 */

function oneThroughSix() {}

/* Q5 (*)
 * Returns a partial copy of an object omitting the keys specified.
 *
 *      R.omit(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); //=> { b: 2, c: 3 }
 */

function omit() {}

module.exports = {
  memoize,
  mergeAll,
  nthArg,
  oneThroughSix,
  omit,
};
