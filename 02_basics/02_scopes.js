var c=200;   //global
let a=2

if(true){
    let a=10              //local
const b=20
var c=30
// console.log("inner",a);
}

// console.log("outer",a);
// // console.log(b);
// console.log(c);


function one(){
    const username="akarsh";

    function two(){
        const website="yt"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username="akarsh"
    if(username=="akarsh"){
        const web="yt"
        // console.log(username+" "+web);
    }

    // console.log(web)
}
// console.log(username)

//---------------------intresting-----------------------

function addone(value){
    return num+1;
}

addone(5)

const addtwo=function(num){
    return num+2;
}
addtwo(5);