const table1 = Listable("table", {
  data: [
    {
      head1: 1,
      head2: 2,
      head3: 3,
      head4: 4,
    },
    {
      head1: 1,
      head2: 2,
      head3: 3,
      head4: 4,
      head5: 5,
    },
  ],
});

table1.addHead(["Fullname", "Age", "Country"]);
table1.addRow(["Mart Salazar", 20, "PH"]);
table1.addRow(["Anthony", 20, "PH"]);
table1.addRow(["asdasd", 20, "PH"]);
table1.addRow(["asfg", 20, "PH"]);
