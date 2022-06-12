import { MaxFn, MaxOptions } from 'types/verification';
import { isMeaningful } from '@/core/util/helper';
import { setResult } from '../hander';
let maxFn: MaxFn = function (v, options) {
  options = options || ({} as MaxOptions);
  const max = options.max ? Number(options.max) : null;
  const val = Number(v || 0);
  if (!isMeaningful(max)) return setResult(true);
  if (val > max) {
    return setResult(false, options.msg);
  }
  return setResult(true);
};
export default maxFn;
