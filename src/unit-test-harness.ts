import { curry } from 'ramda';
import { testCaseToString } from './lib';
import { Args, Expect, Fn } from './types/types';

// TODO: The type argument for `expect` should be updated to reflect
//       that the type of `expected` should match.

const unitTestHarness = curry(
  (expect: Expect<any>, fn: Fn, args: Args, expected: any) => {
    it(testCaseToString({ args, expected }), () =>
      expect(fn(...args)).toEqual(expected),
    );
  },
);

export default unitTestHarness;
