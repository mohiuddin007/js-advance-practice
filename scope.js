//24.7
let bonus = 20; // ei let hocche ekta global scope  eke zekono jayga theke call kora zay 

function sum(first, second) {
    let result = first + second + bonus;
    // console.log(bonus);
    if (result > 9) {
        let mood = 'happy';
        console.log(mood);  //zokhon ami if block theke result output korete caibo tokhon output dekhabe kintu ami zodi if block er bahire theke mood er result dekhte cai tobe error dekhebe --- eta i hocche block scope
        // var mood = 'fishy'; // kintu zokhon let or const use na kore var use kora hobe seta abar bahir theke access kora zabe var ei sob bisoy  mind khay na
     }
    return result;
}

const output = sum(2, 5);
console.log(output);
// console.log(result); //ekhane result function er vitore ache ei result ke function er bahire theke access kora zabe na  

const summation = (first, second) => first + second;
console.log(summation(23, 3));  