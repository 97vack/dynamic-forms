import { HTMLElementExtennds, NodesInterface } from './nodes';
import { VerinstanceInterface } from 'types/verinstance';
import { DepIns } from 'types/dep'

export interface ControllerCtor { new (forms: any): ControllerIns }
export interface ControllerIns {
  forms: any;
  subInstance: ControllerSubInsNode[];
  validate(): boolean | Promise<T>
}

export interface ControllerCtorNode  { new (ctx: HTMLElementExtennds, forms: any): ControllerInsNode; }
export interface ControllerInsNode extends ControllerIns { 
  $el: any;
  forms: any; 
  createDep(): void; 
  getChildren(): Array<HTMLElementExtennds>; 
  getValues(): any;
};

export interface ControllerSubCtor { new ( forms?: any, key?: string): ControllerSubIns; }
export interface ControllerSubIns { 
  _forms: any;
  _refKey: string;
  _is_err: boolean;
  dep: DepIns;
  validate(): boolean | Promise<T>;
  changeDataType(val: string): void;
  changeInnerValue(val: string | number): void;
  changeErrStatus(val: boolean): void;
  changeDep(ins: DepIns): void;
  emitErr(msg: VerResult): void;
}

export interface ControllerSubCtorNode { new (ctx: HTMLElementExtennds, forms?: any, key?: string): ControllerSubInsNode; }
export interface ControllerSubInsNode extends ControllerSubIns  {
  $el: any;
  _nodes: NodesInterface;
  subscriptionTo(): void; 
  update(value: string | number): void;
  input(cxt: ControllerSubInsNode); 
  setErrmsg(msg?: string): void;
  updateErrStatus(val: boolean): void
}
