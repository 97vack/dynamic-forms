import { HTMLElementExtennds, NodesInterface } from 'types/nodes';
import { ControllerSubCtorNode, ControllerSubInsNode } from 'types/controller';
import ControllerSub from './controller-sub';
import Nodes from './nodes';
import { isMeaningful } from '@/core/util/helper';
import { DATA_TYPE } from '@/core/util/static-variable';
import Dep from './dep';
import { VerResult } from 'types/verification';

const ControllerSubNode: ControllerSubCtorNode = class ControllerSubNode extends ControllerSub implements ControllerSubInsNode {
  $el: HTMLElementExtennds;
  _nodes: NodesInterface;
  isExitErr: boolean;
  constructor(ctx: HTMLElementExtennds, forms: any, key: string) {
    super(key, forms);
    this.$el = ctx;
    this._forms = forms;
    this.isExitErr = false;
    this.subscriptionTo();
    this._nodes = new Nodes(this.$el);
    this.updateDataType();
    this.updateDep();
    this.onErr();
  }
  updateDep() {
    this.changeDep(new Dep());
  }
  updateDataType() {
    const type = this._nodes.getAttribute(DATA_TYPE);
    this.changeDataType(type);
  }
  updateErrStatus(val: boolean) {
    this.changeErrStatus(val);
  }
  input(this: ControllerSubNode, e: any) {
    this._forms[this._refKey] = e.target.value;
  }
  subscriptionTo() {
    this.$el.addEventListener('input', this.input.bind(this));
  }
  update(newValue: any) {
    if (this.$el.type === 'radio') {
      this.$el.checked = this.$el.value === newValue;
    } else {
      this.$el.value = newValue;
    }
    this.changeInnerValue(newValue);
  }
  setErrStatus(ins: VerResult) {
    if (!ins.isCheck) {
      if (this.isExitErr) {
        this._nodes.resetErr();
      }
      this._nodes.createErrWrap(ins.msg || '');
      this.isExitErr = true;
    } else {
      if (this.isExitErr) {
        this._nodes.resetErr();
      }
      this.isExitErr = false;
    }
  }
  setErrmsg(msg?: string) {
    if (isMeaningful(msg)) {
      if (this.isExitErr) {
        this._nodes.resetErr();
      }
      this._nodes.createErrWrap(msg);
      this.isExitErr = true;
      this.updateErrStatus(true);
    } else {
      if (this.isExitErr) {
        this._nodes.resetErr();
      }
      this.updateErrStatus(false);
      this.isExitErr = false;
    }
  }
  watchErr(msg: any) {
    this.setErrStatus(msg);
  }
  onErr() {
    this.dep.onErr('watchErr', this.watchErr, this);
  }
};

export default ControllerSubNode;
