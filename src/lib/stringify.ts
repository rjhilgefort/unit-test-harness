import { always, compose, cond, is, join, map, T } from 'ramda';
import format from './format';
import stringifyObject from './stringify-object';

const stringify = x =>
  cond([
    [
      is(Array),
      compose(
        format('[{}]'),
        join(', '),
        map(stringify),
      ),
    ],
    [is(Function), always('<fn>')],
    [T, stringifyObject],
  ])(x);

export default stringify;
