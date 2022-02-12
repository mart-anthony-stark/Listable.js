const Listable = (id, options = {}) => {
  const template = document.createElement("div");
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
  const instanceEl = document.querySelector(`#${id}`);
  instanceEl.appendChild(template);
  const table = instanceEl.querySelector("table");
  const tbody = table.querySelector("tbody");
  const thead = table.querySelector("thead");

  const addHead = (row) => {
    const tr = document.createElement("tr");
    row.forEach((data) => {
      const th = document.createElement("th");
      th.innerHTML = `<span>${data}</span>`;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
  };

  const addRow = (row) => {
    const tr = document.createElement("tr");
    row.forEach((data) => {
      const td = document.createElement("td");
      td.innerHTML = `<span>${data}</span>`;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  };

  return {
    el: instanceEl,
    addHead,
    addRow,
  };
};
