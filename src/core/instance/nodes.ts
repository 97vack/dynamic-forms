import { HTMLElementExtennds, NodesInterface, NodesController } from 'types/nodes';

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
};

export default Nodes;
