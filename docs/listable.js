  class ListableComponent extends HTMLElement {
    constructor() {
      super();
      const className = this.getAttribute("class");
      const id = this.getAttribute("id");
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

          <div class="listable">
        <input id="listable-search" type="text" placeholder="Search">
        <table>
            <thead>
                <th>Col 1</th>
                <th>Col 2</th>
                <th>Col 3</th>
                <th>Col 4</th>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            </tbody>
        </table>
    </div>
      `;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(template.content.cloneNode(true));

      const root = this.shadowRoot.querySelector(".listable");
    }
  }

  window.customElements.define("list-table", ListableComponent);
const Listable = () => {

};
