export interface DepCtor { new (): DepIns }

export interface QueueIns { key: string; callback: Function, ctx: any; } 

export interface DepIns {
  queues: Queues;
  onErr(key: string, callback: Function, ctx: any): void;
  emitErr(key: string, ...args: any): void;
}