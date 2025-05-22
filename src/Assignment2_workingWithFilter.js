const students = [
  { firstName: "satish", lastName: "raysane" },
  { firstName: "Praful", lastName: "sakhargade" },
  { firstName: "komal", lastName: "sakhargade" },
  { firstName: "sita", lastName: "raysane" },
  { firstName: "subhash", lastName: "raysane" }
];

const filterByLastName = students.filter(student => student.lastName==='raysane');
console.log(filterByLastName);
