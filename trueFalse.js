//24.2
//0 = false
// '' = false
//undefined = false
//null = false 
// NaN = false
//false = falsy
//'0' = truthy
// ' ' = truthy
// [] = true
// {} = true

const name = 'solaiman';

if(name.length > 0){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const num = 0;

if(num){    // zokhon ami < or > , = ei doroner kono condition set na kore if likhi tokhon by default se ei value ta 0 theke boro kina ta check kore 
    console.log('condition is true');
}
else{
    console.log('condition is false');
}

const name1 = NaN; 
//  zodi string er moddhe kichu likha thake tobe seta truthy ar zodi kichu na likha thake tobe seta false

if(name1){
    console.log('condition is true');
}
else{
    console.log('condition is false');
}