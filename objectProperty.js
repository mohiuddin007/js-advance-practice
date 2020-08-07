//24.6
const students = [
    {id: 32, name: 'omar sunny'},
    {id: 43, name: 'Maannaa'},
    {id: 41, name: 'alomgir'},
    {id: 44, name: 'Deepjol'}
];

// var studentsName = [];
// for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const nameNayok = element.name;
//     studentsName.push(nameNayok);
// }

// console.log(studentsName);  /// this is too long way

const names = students.map(s => s.name);  // short way -- by arrow function and .map
const ids = students.map(s => s.id);
console.log(ids);
console.log(names);

const bigger = students.filter( s => s.id>40);
console.log(bigger);

const biggerOne = students.find( s => s.id>40);
console.log(biggerOne); 

