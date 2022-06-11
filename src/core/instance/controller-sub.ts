import { HTMLElementExtennds } from 'types/nodes';
import { ControllerSubConstructor, ControllerSubInterface } from 'types/controller';

const ControllerSub: ControllerSubConstructor = class ControllerSub implements ControllerSubInterface {
  $el: HTMLElementExtennds;
  _forms: any;
  _refKey: string;
  constructor(ctx: HTMLElementExtennds, forms: any, key: string) {
    this.$el = ctx;
    this._forms = forms;
    this._refKey = key;
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
};

export default ControllerSub;
