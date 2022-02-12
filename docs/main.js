const table1 = Listable("asd", {
  data: [
    {
      head1: 1,
      head2: 2,
      head3: 3,
      head4: 4,
    },
  ],
});

table1.addHead(["Fullname", "Age", "Address"]);
table1.addRow(["Mart Salazar", 20, "Happy Homes Fairview"]);
table1.addRow(["Mart Salazar", 20, "Happy Homes Fairview"]);
table1.addRow(["Mart Salazar", 20, "Happy Homes Fairview"]);
table1.addRow(["Mart Salazar", 20, "Happy Homes Fairview"]);
