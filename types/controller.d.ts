import { HTMLElementExtennds } from './nodes';

export interface ControllerConstructor { new (ctx: HTMLElementExtennds, forms: any): ControllerInterface; }

export interface ControllerInterface { createDep(): void; getChildren(): Array<HTMLElementExtennds>; forms: any; getValues(): any}

export interface ControllerSubConstructor { new (ctx: HTMLElementExtennds, forms?: any, key?: string): ControllerSubInterface; }

export interface ControllerSubInterface { subscriptionTo(): void; update(value: string | number): void; input(cxt: ControllerSubInterface)}
