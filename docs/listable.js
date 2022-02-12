const Listable = () => {
  class ListableComponent extends HTMLElement {
    constructor() {
      super();
      const className = this.getAttribute("class");
      const id = this.getAttribute("id");
      const theme = this.getAttribute("theme");
    }
  }

  window.customElements.define("list-table", ListableComponent);
};
