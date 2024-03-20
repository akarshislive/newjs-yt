let val1=10
let val2=5
function addnum(num1,num2){
    let total=num1+num2
    return total;
}
let result=addnum(val1,val2)
let result2=addnum(10,2)

function one(){
    console.log("one");
    two()
}
function two(){
    console.log("two");
}
function three(){
    console.log("three");
}
one();
two();
three();