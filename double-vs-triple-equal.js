//24.4
const first = 2;
const second = '2';
if(first == second){  //ekta number kintu kintu onno value ta string howya sorte o duita ke soman bolbe == (double equal dile)
    console.log('condition is true');

}
else{
    console.log('condition is false');
}
// double equal dile shudu value ta ke check korbe ar triple equal dile value ebong type dui ta ke i check korbe


const first1 = 2;
const second1 = '2';
if(first1 === second1){  // double equal dile zodi o true bolteche kintu thiple equal dile false bolteche
    console.log('condition is true');

}
else{
    console.log('condition is false');
}

const firstNum = 1; // ekhane zodi o 1 ebong true same value na kintu javascript e kono ekta value check korar somoy true bolte bujay 1 ar false bolte bujay 0
// tai ekhane result true dekhabe
const secondNum = true;
if(firstNum == secondNum){
    console.log('condition is true');

}
else{
    console.log('condition is false');
}

const firstNumber = 0;
const secondNumber = false;
if(firstNumber === secondNumber){  // ei ekoi kaj zokhon ami triple equal diye korbo tokhon type value duita i check korbe ebong result hobe false
    console.log('condition is true');

}
else{
    console.log('condition is false');
}