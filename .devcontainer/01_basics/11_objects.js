// const tinderuser=new Object()   //objects can be declared like this

const tinderuser={}   //objects can be declared like this
 tinderuser.id="567"
 tinderuser.name="sam"
 tinderuser.islogged=false
// console.log(tinderuser)

const regularuser={
email:"akd67@gmail.com",
fullname:{
    userfullname:{
        firstname:"akarsh",
        lastname:"dubey"
    }
}
}

// console.log(regularuser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj4={5:"a",6:"b"}
// const obj3=Object.assign({},obj1,obj2,obj4)
// console.log(obj3);


const obj3={...obj1,...obj2}  //spread operator--allows us to quickly copy all or part of an existing array or object into another array or object.
// console.log(obj3);


const users=[
{
},
{
},
{
},
]
users[1].email
// console.log(tinderuser)
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


 course={
coursename:"hindi",
courseprice:"999",
instructor:"dhh"
}
console.log(course);

const{instructor}=course
console.log(instructor);
