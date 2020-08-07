//24.5
const numbers = [3, 3,4,5,6 ,2,6];
// const output =[];

// for (let i=0; i< numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

function square(element) {
    return element * element;
}
const result = numbers.map(function(element){  // short cut by arrow function const result = numbers.map( x => x * x) ;
   return element * element;
})
console.log(result);

const bigger = numbers.filter(x => x > 5);
console.log(bigger);

const isThere = numbers.find(x => x > 2);
console.log(isThere);  //find prothome zake pabe take i diye dibe 