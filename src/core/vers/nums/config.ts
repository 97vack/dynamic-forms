import { NumOptions } from 'types/verification';
import { NumRegs } from '../regs';
export const DEFAULT_OPTIONS: NumOptions = {
  required: false,
  regs: {
    value: NumRegs,
  },
  basicMsg: '请输入整数类型',
};
