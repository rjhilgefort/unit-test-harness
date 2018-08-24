import { curryN } from 'ramda';
import stringFormat from 'string-format';

// SEE: https://github.com/davidchambers/string-format

type Data = string | object;
interface Format {
  (template: string): (data: Data) => string;
  (template: string, data: Data): string;
}
export const format: Format = curryN(2, stringFormat);

export default format;
