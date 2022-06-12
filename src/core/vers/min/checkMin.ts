import { MinFn, MinOptions } from 'types/verification';
import { isMeaningful } from '@/core/util/helper';
import { setResult } from '../hander';
const minFn: MinFn = function (v, options) {
  options = options || ({} as MinOptions);
  const min = options.min ? Number(options.min) : null;
  const val = Number(v || 0);
  if (!isMeaningful(min)) return setResult(true);
  if (val < min) {
    return setResult(false, options.msg);
  }
  return setResult(true);
};
export default minFn;
