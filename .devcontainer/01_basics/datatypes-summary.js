//primitive
//7types:String,number,boolean,null,undefined,symbol,bigint

const score=100
const scorevalue=100.3

const isloggedin=false
const outsidetemp=null
let useremail;
const id=Symbol('123')
const anotherid=Symbol('123')

// console.log(id==anotherid)

const bigNumber=123456789000123444n
// console.log(bigNumber)



//reference type or non primitive
//arrays,objects,functions
const heros=["shaktiman","naagraj",'doga']; //array


let myobj={                 //object
    name:"akarsh",
    age:22,
}


const myFunction=function(){
    // console.log("hi")
}

// console.log(typeof bigNumber);
// console.log(hi)



//=============================================================

//stack(primitive),heap

let myname="akadotcom"
let anothername=myname
anothername="maserati"
console.log(myname);
console.log(anothername);


let userone={
    email:"user@qwert.com",
    upi:"ybl@india"
}
let usertwo=userone
usertwo.email="aka34@gmail.com"
console.log(userone.email);
console.log(usertwo.email);
