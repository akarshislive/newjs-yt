// function name(){
//     console.log("A");
//     console.log("k");
//     console.log("A");
//     console.log("R");
//     console.log("S");
//     console.log("H");
// }

// name();
//--------------------------------------
// function addtwonumber(number1,number2){
//     console.log(number1+number2);
// }
//----------------------------------------
function addtwonumber(number1,number2){
    // let result=number1+number2
    // return result;
    return number1+number2;
}

const result=addtwonumber(3,4)
// console.log("result-",result);

//----------------------------------------


function loguser(username){
    return `${username} just logged in`
}

const x=loguser("pappu")
// console.log(x);


//-----------------------------------------

function calculate(...num1){     //... used to access multiple numbers in a array
    return num1;
}
// console.log(calculate(2,3,4,5,6,7));



//-------------------------------------

const user={
    username:"akarsh",
    price:899
}

function handle(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handle(user)
handle({
    username:"sam",
    price:399
})


const arr=[100,98,78,90]

function  returnsec(getarray){
    return getarray[1]
}

console.log(returnsec(arr));
