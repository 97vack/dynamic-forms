import ControllerNode from '@/core/instance/controller-node';
import { HTMLElementExtennds } from 'types/nodes';
import { ControllerInsNode } from 'types/controller';
import { DATA_REF } from '@/core/util/static-variable';

export function getFormsValues(this: any, ref?: HTMLElement | any) {}

const getInstance = (() => {
  const instacncs: { ref: string; ins: ControllerInsNode }[] = [];
  const getAttri = function (this: any) {
    return this.getAttribute(DATA_REF);
  };
  return function (this: HTMLElementExtennds, forms?: any) {
    if (!instacncs.length || !instacncs.some((v) => v.ref === getAttri.call(this))) {
      instacncs.push({ ref: getAttri.call(this), ins: new ControllerNode(this, forms) });
      return instacncs[instacncs.length - 1].ins;
    } else {
      const o = instacncs.find((v) => v.ref === getAttri.call(this));
      return o?.ins || null;
    }
  };
})();

(HTMLElement.prototype as HTMLElementExtennds).dyGetFormsValues = function () {
  const controllerInstacne = getInstance.call(this);
  return controllerInstacne.forms;
};

(HTMLElement.prototype as HTMLElementExtennds).dySetControl = function (forms: any) {
  const controllerInstacne = getInstance.call(this, forms);
  controllerInstacne && controllerInstacne.createDep();
  return controllerInstacne;
};
