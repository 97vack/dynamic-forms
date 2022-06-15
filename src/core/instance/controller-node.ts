import { HTMLElementExtennds, NodesInterface } from 'types/nodes';
import { ControllerCtorNode, ControllerInsNode, ControllerSubInsNode } from 'types/controller';
import Controller from './controller';
import Nodes from './nodes';
import { DATA_REF } from '@/core/util/static-variable';
import ControllerSubNode from './controller-sub-node';

const ControllerNodes: ControllerCtorNode = class ControllerNodes extends Controller implements ControllerInsNode {
  $el: HTMLElementExtennds;
  _nodes: NodesInterface;
  _children: Array<HTMLElementExtennds>;
  forms: any;
  _key_Value_children: Array<{ key: string; value: any; el: HTMLElementExtennds }>;
  constructor(ctx: HTMLElementExtennds, forms: any) {
    super(forms);
    if (!(ctx instanceof HTMLElement)) {
      throw new Error('错误');
    }
    this.$el = ctx;
    this.forms = forms;
    this._nodes = new Nodes(this.$el);
    this._children = this.getChildren();
    this._key_Value_children = this._children.map((v) => ({ key: v.getAttribute(DATA_REF), value: v.value, el: v }));
  }
  createDep() {
    Object.keys(this.forms).forEach((v) => {
      const subInstance = this._key_Value_children.filter((c) => c.key === v);
      const controllerSubs: ControllerSubInsNode[] = [];
      if (subInstance.length) {
        subInstance.forEach((s) => {
          const sub = new ControllerSubNode(s.el, this.forms, v);
          sub.update(this.forms[v]);
          controllerSubs.push(sub);
          this.subInstance.push(sub);
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
    const recuChildren = (parents: any[]): any => {
      let a: HTMLElementExtennds[] = [];
      parents.forEach((v) => {
        if (v.getAttribute(DATA_REF)) {
          a.push(v);
        }
        if (v.children && v.children.length) {
          a.push(...recuChildren(Array.from(v.children)));
        }
      });
      return a;
    };

    return recuChildren(this._nodes.getChildren());
  }
  getValues() {
    return this.forms;
  }
  setErrmsg(key: string, msg?: string) {
    const ins = this.subInstance.filter((v) => v._refKey === key);
    ins.forEach((v) => {
      v.setErrmsg(msg);
    });
  }
};

export default ControllerNodes;
