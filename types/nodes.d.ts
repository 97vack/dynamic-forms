export type Htl = HTMLElementExtennds & Element & HTMLInputElement;

export interface HTMLElementExtennds extends HTMLElement, HTMLInputElement {
  dyGetFormsValues?: any;
  dySetControl?: any;
  dyDestory?: any;
  value?: any;
}

export interface NodesController { new (ctx: HTMLElementExtennds): NodesInterface; }

export interface NodesInterface {
  getAttribute: (name: string) => string | number;
  queryNode: (val: string) => any;
  queryNodes: (val: string) => any;
  getChildren: () => any;
  createErrWrap: (msg: string) => any
}
