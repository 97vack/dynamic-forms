import { HTMLElementExtennds, NodesInterface } from 'types/nodes';
import { ControllerSubConstructor, ControllerSubInterface } from 'types/controller';
import { VerinstanceInterface } from 'types/verinstance';
import verinstance from './ver';

const ControllerSub: ControllerSubConstructor = class ControllerSub implements ControllerSubInterface {
  $el: HTMLElementExtennds;
  _forms: any;
  _refKey: string;
  verInstance: VerinstanceInterface;
  _nodes: NodesInterface;
  constructor(ctx: HTMLElementExtennds, forms: any, key: string) {
    this.$el = ctx;
    this._forms = forms;
    this._refKey = key;
    this.verInstance = new verinstance(this, forms);
    this.subscriptionTo();
  }
  input(this: ControllerSub, e: any) {
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
  }

  setVerMsg(key: string, msg: string) {
    this.verInstance.setVerMsg(key, msg);
  }
};

export default ControllerSub;
