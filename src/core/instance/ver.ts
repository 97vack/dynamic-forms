import { VerInstance, VerInstanceCtor } from 'types/verinstance';
import * as Vs from '@/core/vers';
import { NumOptions, MaxOptions, MinOptions } from 'types/verification';
import { DataType } from 'types/verification';
import { setResult } from '@/core/vers/hander';

type ArgsType = string | number;

const Ver: VerInstanceCtor = class Ver implements VerInstance {
  validate(val: ArgsType, type?: DataType) {
    const fn = this.emit(type);
    if (fn && typeof fn === 'function') {
      return fn(val);
    } else {
      return setResult(true);
    }
  }
  emit(type: DataType) {
    const fns = {
      number: this.checkNum,
    };
    const getF = <T extends object, K extends keyof T>(obj: T, key: K) => {
      return obj[key];
    };
    return getF(fns, type as any);
  }
  checkNum(val: ArgsType, options?: NumOptions) {
    return Vs.checkNum(val, options);
  }
  checkMax(max: ArgsType, options?: MaxOptions) {
    return Vs.checkMax(max, options);
  }
  checkMin(min: ArgsType, options?: MinOptions) {
    return Vs.checkMin(min, options);
  }
};

export default Ver;
