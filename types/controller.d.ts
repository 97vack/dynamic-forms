import { HTMLElementExtennds } from './nodes';

export interface ControllerConstructor { new (ctx: HTMLElementExtennds, forms: any): ControllerInterface; }

export interface ControllerInterface { 
  $el: any;
  createDep(): void; 
  getChildren(): Array<HTMLElementExtennds>; forms: any; 
  getValues(): any;
  setVerMsg(key: string, msg?: string): void;
};

export interface ControllerSubConstructor { new (ctx: HTMLElementExtennds, forms?: any, key?: string): ControllerSubInterface; }

export interface ControllerSubInterface {
  $el: any;
  _refKey: string;
  subscriptionTo(): void; 
  update(value: string | number): void;
  input(cxt: ControllerSubInterface);
  setVerMsg(key: string, msg?: string);
}
