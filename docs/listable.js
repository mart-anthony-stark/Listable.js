const Listable = (id, options = {}) => {
  let instanceEl;
  // Custom Element
  class ListableComponent extends HTMLElement {
    constructor() {
      super();
      const className = this.getAttribute("class");
      const id = this.getAttribute("#");
      const theme = this.getAttribute("theme");

      const template = document.createElement("template");
      template.innerHTML = `
        <style>
        .listable {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            justify-content: center;
            align-items: center;
            gap: 15px;
            padding: 5px;
            background: rgb(245, 245, 245);
          }
          .listable input#listable-search {
            padding: 5px;
            align-self: flex-start;
          }
          .listable table {
            background: rgb(219, 219, 219);
            width: 100%;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            border: 1px solid black;
            border-collapse: collapse;
          }
          .listable table td,
          .listable table th {
            padding: 10px;
            text-align: center;
          }
          .listable table thead {
            border-bottom: 1px solid black;
          }
          .listable table tbody tr:hover {
            cursor: pointer;
            background: rgb(230, 230, 230);
          }
          </style>

        <div class="listable" id=${id}>
        <input id="listable-search" type="text" placeholder="Search">
        <table>
            <thead>
            </thead>
            <tbody>
               
            </tbody>
        </table>
    </div>
      `;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const root = this.shadowRoot.querySelector(".listable");

      if (!options.data) {
        throw "Data property must be provided in options";
      }
      instanceEl = root;
    }
  }
  window.customElements.define("list-table", ListableComponent);
  const table = instanceEl.querySelector("table");
  console.log(table);
  const addRow = () => {
    const tr = document.createElement("tr");
    for (let i = 0; i < 5; i++) {
      const td = document.createElement("td");
      td.innerHTML = `<span>${i}</span>`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  };

  return {
    el: instanceEl,
    addRow,
  };
};
