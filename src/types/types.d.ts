export type ToEqual = (val: any) => boolean;
export type Expect = (x: any) => { toEqual: ToEqual };
export type Args = any[];
export type Fn = (...args: Args) => any;
export type Case = [any[], any];
export type Cases = Case[];
