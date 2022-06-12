import { VerinstanceConstructor, VerinstanceInterface } from 'types/verinstance';
import { NodesInterface } from 'types/nodes';
import { ControllerInterface, ControllerSubInterface } from 'types/controller';
import Nodes from './nodes';

const verinstance: VerinstanceConstructor = class verinstance implements VerinstanceInterface {
  _nodes: NodesInterface;
  constructor(public ctx: ControllerInterface | ControllerSubInterface, public forms: any) {
    forms = forms;
    ctx = ctx;
    this._nodes = new Nodes(ctx.$el);
  }
  verification() {}
  createDiv() {
    return this._nodes.createErrWrap();
  }
  setVerMsg(key: string, msg?: string) {
    const ele = this.createErrWrap(msg);
    this.$el.parentNode.replaceChild(ele, this.$el);
    ele.appendChild(this.$el);
  }
};

export default verinstance;
