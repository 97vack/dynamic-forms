import { ControllerSubCtor, ControllerSubIns } from 'types/controller';
import VerInstances from './ver';
import { VerInstance } from 'types/verinstance';
import { DataType, VerResult } from 'types/verification';
import { isMeaningful } from '@/core/util/helper';
import { DATA_TYPES } from '@/core/util/static-variable';
import { cloneDeep } from 'lodash';
import { DepIns } from 'types/dep';
import { setResult } from '../vers';

const ControllerSub: ControllerSubCtor = class ControllerSub implements ControllerSubIns {
  _forms: any;
  _refKey: string;
  _is_err: boolean = false;
  verInstance: VerInstance;
  dataType: DataType[];
  innerValue: string | number;
  dep: DepIns;
  constructor(key: string, forms: any) {
    this._refKey = key;
    this._forms = forms;
    this.verInstance = new VerInstances();
  }
  changeInnerValue(val: string | number) {
    this.innerValue = val;
  }
  changeDataType(val: string) {
    if (isMeaningful(val)) {
      const splitV: DataType[] = (val.split(',') || []).map((v) => v.trim()) as DataType[];
      console.log(splitV);
      const vs = splitV.filter((v) => DATA_TYPES.includes(v as DataType));
      const vsn = splitV.filter((v) => !DATA_TYPES.includes(v as DataType));
      if (vsn && vsn.length) {
        console.warn(`${vsn.join(',')} exists on data-ref="${this._refKey}", which does not belong to ${DATA_TYPES.join(',')}`);
      }
      this.dataType = cloneDeep(vs);
    }
  }
  changeErrStatus(val: boolean) {
    this._is_err = val;
  }
  changeDep(ins: DepIns) {
    this.dep = ins;
  }
  emitErr(msg: VerResult) {
    this.dep.emitErr('watchErr', msg);
  }
  validate(v?: DataType) {
    if (!this.dataType || !this.dataType.length) {
      this.changeErrStatus(false);
      return !this._is_err;
    }
    for (let i = 0; i < this.dataType.length; i++) {
      const v = this.dataType[i];
      const result = this.verInstance.validate(this.innerValue, v);
      if (!result.isCheck) {
        this._is_err = true;
        this.emitErr(result);
        break;
      } else {
        this._is_err = false;
      }
    }
    if (!this._is_err) {
      this.emitErr(setResult(true));
    }
    return !this._is_err;
  }
};

export default ControllerSub;
