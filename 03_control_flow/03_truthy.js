const usermail="ertt67@gmail.com"
if(usermail){    //this is truthy value without any condition chechk its executing
console.log("got it");
}
else{
    console.log("nope");
}


//truthy value--"0",'false," ",[],{},function(){}

//falsy value--  false,0,-0,BigInt  0n," ",null,undefined,NaN


if(usermail.length===0){
    console.log("array is empty");
}

const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}



//nullish coalescing operator
let val1;
val1=5??10
console.log(val1);

let val2;
val2=null??10
console.log(val2);


//terniary operator
// condition ? true:false
const iceprice=100
iceprice >=80 ? console.log("less than 80") : console.log("more than 80");