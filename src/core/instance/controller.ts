import { HTMLElementExtennds, NodesInterface } from 'types/nodes';
import { ControllerConstructor, ControllerInterface, ControllerSubInterface } from 'types/controller';
import ControllerSub from './controller-sub';
import Nodes from './nodes';
import { DATA_REF } from '@/core/util/static-variable';

const Controller: ControllerConstructor = class Controller implements ControllerInterface {
  $el: HTMLElementExtennds;
  _nodes: NodesInterface;
  forms: any;
  _children: Array<HTMLElementExtennds>;
  _key_Value_children: Array<{ key: string; value: any; el: HTMLElementExtennds }>;
  constructor(ctx: HTMLElementExtennds, forms: any) {
    if (!(ctx instanceof HTMLElement)) {
      throw new Error('错误');
    }
    this.$el = ctx;
    this.forms = forms;
    this._nodes = new Nodes(this.$el);
    this._children = this.getChildren();
    this._key_Value_children = this._children.map((v) => ({ key: v.getAttribute('data-ref'), value: v.value, el: v }));
  }
  createDep() {
    Object.keys(this.forms).forEach((v) => {
      const subInstance = this._key_Value_children.filter((c) => c.key === v);
      const controllerSubs: ControllerSubInterface[] = [];
      if (subInstance.length) {
        subInstance.forEach((s) => {
          const sub = new ControllerSub(s.el, this.forms, v);
          sub.update(this.forms[v]);
          controllerSubs.push(sub);
        });
      }
      let value = this.forms[v];
      Object.defineProperty(this.forms, v, {
        get() {
          return value;
        },
        set(newVal: any) {
          controllerSubs.forEach((c) => {
            c.update(newVal);
          });
          value = newVal;
        },
      });
    });
  }
  getChildren() {
    return this._nodes.getChildren().filter((v: HTMLElementExtennds) => v.getAttribute(DATA_REF));
  }
  getValues() {
    return this.forms;
  }
};

export default Controller;
