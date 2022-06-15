import { DepCtor, DepIns, QueueIns } from 'types/dep';

const Dep: DepCtor = class Dep implements DepIns {
  queues: Array<QueueIns> = [];
  constructor() {}
  getInstance(key: string) {
    if (!this.queues || !this.queues.length) return null;
    return this.queues.find((v: any) => v.key == key) || null;
  }
  onErr(key: string, callback: Function, ctx: any) {
    if (!callback || typeof callback !== 'function') return;
    const instance = this.getInstance(key);
    if (instance) return;
    this.queues.push({ key, callback, ctx });
  }
  emitErr(key: string, ...args: any) {
    const ins: QueueIns = this.getInstance(key);
    if (ins) {
      ins.callback.apply(ins.ctx, args);
    }
  }
};

export default Dep;
