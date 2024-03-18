 const mysym=Symbol("key1")
 
 const jsuser={
    name:"akarsh",
    "full name":"akarsh dubey",
    [mysym]: "mykey1",
    age:18,
    location:"jaipur",
    email:"aka34@gmail.com",
    islogged:false,
lastlogin:["mondat","saturday"]
 }
 console.log(jsuser.email)
 console.log(jsuser["email"])
 console.log(jsuser["full name"])
 console.log( jsuser[mysym])


 jsuser.email="akarsh678.com"
//  Object.freeze(jsuser)    //values gets freezed no change thereafter
 jsuser.email="retur89@gmail.com"
 console.log(jsuser)





 jsuser.greet=function(){
    console.log("hello js user");
 }

 console.log(jsuser.greet());
