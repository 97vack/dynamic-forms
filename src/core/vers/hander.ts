import { VerResult } from 'types/verification';
import { isMeaningful } from '@/core/util/helper';

export const setResult = (isCheck: boolean, msg?: string): VerResult => {
  const result: VerResult = { isCheck };
  isMeaningful(msg) && (result.msg = msg);
  return result;
};
