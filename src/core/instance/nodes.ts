import { HTMLElementExtennds, NodesInterface, NodesController } from 'types/nodes';
import '@/styles/err-class.css';

const Nodes: NodesController = class Nodes implements NodesInterface {
  $el: Element;
  constructor(ctx: HTMLElementExtennds) {
    this.$el = ctx || null;
  }
  getCurrentNode(ctx?: HTMLElementExtennds) {
    return ctx || this.$el;
  }
  queryNode(selector: string) {
    return this.$el?.querySelector(selector);
  }
  queryNodes(selector: string) {
    return Array.from(this.$el?.querySelectorAll(selector) || []);
  }
  getAttribute(name: any) {
    return this.$el.getAttribute(name);
  }
  getChildren() {
    return Array.from(this.$el?.children || []) || [];
  }
  createElement(tag: string) {
    return document.createElement(tag);
  }
  resetErr() {
    this.$el.parentNode.parentNode.replaceChild(this.$el, this.$el.parentNode);
  }
  addClassList(ele: HTMLElementExtennds | HTMLElement, ...className: string[]) {
    ele.classList.add(...className);
  }
  appendErrMsg(msg: string) {
    const div = this.createElement('div');
    this.addClassList(div, 'dynamic-forms-err_item_err-wrap');
    div.innerHTML = msg || '';
    return div;
  }
  createErrWrap(msg: string) {
    const div = this.createElement('div');
    this.addClassList(div, 'dynamic-forms-err_item_wrap');
    div.classList.add('dynamic-forms-err_item_wrap');
    this.$el.parentNode.replaceChild(div, this.$el);
    div.appendChild(this.$el);
    div.appendChild(this.appendErrMsg(msg));
    return div;
  }
};

export default Nodes;
