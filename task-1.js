const parser = new DOMParser();

const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const students = Array.from(xmlDOM.getElementsByTagName("student"));

const result = {
  list: students.map(student => {
    const nameNode = student.getElementsByTagName("name")[0];
    const firstName = nameNode.getElementsByTagName("first")[0].textContent;
    const secondName = nameNode.getElementsByTagName("second")[0].textContent;
    const lang = nameNode.getAttribute("lang");
    const age = student.getElementsByTagName("age")[0].textContent;
    const prof = student.getElementsByTagName("prof")[0].textContent;
    
    return {
      name: `${firstName} ${secondName}`,
      age: age,
      prof: prof,
      lang: lang
    };
  })
};

console.log(result);