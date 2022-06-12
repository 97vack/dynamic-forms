import { ControllerSubInterface, ControllerInterface } from './controller'
export interface VerinstanceConstructor { new (ctx: ControllerInterface | ControllerSubInterface, instance: any): VerinstanceInterface }

export interface VerinstanceInterface { 
  setVerMsg: (key: string, msg?: string) => void;
 }