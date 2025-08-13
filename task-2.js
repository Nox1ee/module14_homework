const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);

data.list = data.list.map(student => ({
  name: student.name,
  age: student.age,
  prof: student.prof
}));

console.log(data.list)


