import expectTypes from 'expect';

// TODO: I pulled this from @types/expect because I couldn't
//       figure out how to import it.
export type Expect<T> = (actual: T) => expectTypes.Expectation<T>;

export type Args = any[];
export type Fn = (...args: Args) => any;
export type Case = [any[], any];
export type Cases = Case[];
