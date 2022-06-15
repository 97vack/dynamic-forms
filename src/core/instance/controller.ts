import { ControllerCtor, ControllerIns, ControllerSubInsNode } from 'types/controller';

const Controller: ControllerCtor = class Controller implements ControllerIns {
  subInstance: Array<ControllerSubInsNode> = [] as ControllerSubInsNode[];
  forms: any;
  constructor(forms: any) {
    this.forms = forms;
  }
  validate() {
    const s: any[] = [];
    this.subInstance.forEach((v) => {
      s.push(v.validate());
    });
    return s.every((v) => v);
  }
};

export default Controller;
