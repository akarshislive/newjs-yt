let mydate=new Date()
// console.log(mydate)
// console.log(mydate.toString())
// console.log(mydate.toDateString())
// console.log(mydate.toLocaleString())
// console.log(typeof mydate)

let mydatee=new Date(2024,1,23)
// console.log(mydatee.toDateString());

let mytimes=Date.now()
// console.log(mytimes);
// console.log(mydatee.getTime());

let newdate=new Date()
// console.log(newdate)
// console.log(newdate.getMonth()+1)
// console.log(Date.now()/1000);

newdate.toLocaleString('default',{
    weekday: "long",
})