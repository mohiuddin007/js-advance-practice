//24.3
let name 
console.log(name); // zokhon variable er kono value set na kore call kora hobe tokhon result undefined dekhabe

function add(num1, num2) {
    console.log(num1 + num2);
    return
}
const result = add(23, 22); // zokkhon function theke kono kichu return na kore function ke call kora hobe tokhon result undefined dekhabe 
console.log(result);


function add(num1, num3) {
    console.log(num1, num3);
}
const result = add(13); // sobgula parameter er value pass na kore zodi call kora hoy tobe zar value pass kora hoy ni tar value undefined dekhabe

console.log(result);

// get undefined from an object

const premik = {name:'smart dude', phone: 1341334};
console.log(premik.gf) // zodi object theke emon kono property call kora hoy zar value object er moddhe set kora nai tokhon undefined dekhabe


// zokhon variable er value age theke undefined set kora thake tokhon output undefined dekhabe ---zodio age theke undefined set kora uchit na 
let fun = undefined;
console.log(fun);

// null bolte bujhay empty 