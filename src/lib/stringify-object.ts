import { __, curryN } from 'ramda';
import stringifyObjectUncurry from 'stringify-object';

const stringifyObject = curryN(2, stringifyObjectUncurry)(__, {
  indent: '  ',
  inlineCharacterLimit: 50,
});

export default stringifyObject;
