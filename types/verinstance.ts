import { NumFn, MaxFn, MinFn } from 'types/verification'
import { DataType, VerResult } from 'types/verification'

export interface VerInstanceCtor { new (): VerInstance }
export interface VerInstance {
  validate(val: string | number, type?: DataType): VerResult;
  emit(type: DataType): NumFn;
  checkNum: NumFn;
  checkMax: MaxFn;
  checkMin: MinFn;
}