const table1 = Listable("table", {
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
table1.addRow(["Anthony", 20, "Happy Homes Fairview"]);
table1.addRow(["asdasd", 20, "Happy Homes Fairview"]);
table1.addRow(["asfg", 20, "Happy Homes Fairview"]);
