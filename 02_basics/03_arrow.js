const user={
    username:"akarsh",
    price:999,
    welcomemsg:function(){
// console.log(`${this.username}, welcome to website`);    // this keyword used to refer current  context
// console.log(this);
    }
}

user.welcomemsg()
user.username="sam"
user.welcomemsg()

// console.log(this);


// function chai(){
//     let username="akarsh"
//     console.log(this.username);
// }

// chai();



const chai=function(){
    let username="akarsh"
    console.log(this.username);
}

const addtwo=(num1,num2)=>{
    return num1+num2;

}
console.log(addtwo(3,6))



//-------------we can also do this--------------
const addtwoo=(num1,num2)=>(num1+num2)
console.log(addtwoo(7,8));

