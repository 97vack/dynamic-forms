import { NumFn } from 'types/verification';
import { DEFAULT_OPTIONS } from './config';
import { cloneDeep } from 'lodash';
import { VER_ERR_MSG } from '@/core/util/static-variable';
import { isMeaningful } from '@/core/util/helper';
import checkMax from '../max/checkMax';
import checkMin from '../min/checkMin';
import { setResult } from '../hander';

const nums: NumFn = (val, config) => {
  const options = cloneDeep(Object.assign({}, DEFAULT_OPTIONS, config, {}));
  val = String(val);
  if (options.required && !isMeaningful(val)) {
    return setResult(false, options.required?.msg || options.basicMsg || VER_ERR_MSG.requireEN);
  }
  if (options.regs?.value && isMeaningful(val)) {
    let regs = options.regs?.value;
    regs = regs instanceof RegExp ? regs : new RegExp(regs);
    if (!regs.test(val)) {
      return setResult(false, options.regs.msg || options.basicMsg);
    }
  }
  if (isMeaningful(options.max?.value) && !checkMax(val, { max: options.max.value, msg: options.max.msg }).isCheck) {
    return setResult(false, options.max.msg);
  }
  if (isMeaningful(options.min?.value) && !checkMin(val, { min: options.min.value, msg: options.min.msg }).isCheck) {
    return setResult(false, options.min.msg);
  }
  return setResult(true);
};
export default nums;
