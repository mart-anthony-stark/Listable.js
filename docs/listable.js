const Listable = (id, options = {}) => {
  const template = document.createElement("div");
  template.innerHTML = `
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
  if (options.data) initializeTable(options.data);

  function addHead(row) {
    const tr = document.createElement("tr");
    row.forEach((data) => {
      const th = document.createElement("th");
      th.innerHTML = `<span>${data}</span>`;
      tr.appendChild(th);
    });
    thead.appendChild(tr);
  }

  function addRow(row) {
    console.log(row);
    const tr = document.createElement("tr");
    row.forEach((data) => {
      const td = document.createElement("td");
      td.innerHTML = `<span>${data}</span>`;
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  }

  function initializeTable(data) {
    console.log(data);
    const headerCells = [];
    let header = data.map((d) => {
      return Object.keys(d);
    });

    header.forEach((h) => {
      h.forEach((cell) => {
        !headerCells.includes(cell) && headerCells.push(cell);
      });
    });

    const rows = data.map((d) => {
      const values = [];
      for (let value in d) values.push(value);
      return values;
    });
    console.log(rows);

    addHead(headerCells);
    rows.forEach((row) => {
      addRow(row);
    });
  }

  return {
    el: instanceEl,
    addHead,
    addRow,
  };
};
