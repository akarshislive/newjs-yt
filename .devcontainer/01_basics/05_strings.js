 const name="akarsh"
 const repocount=50
//  console.log(name +repocount +" value");
//new way to access string variables
// console.log(`hello my name is ${name} and my repo count is${repocount}`);

const gamename=new String('akarshdb')
// console.log(gamename[0]);
// console.log(gamename.__proto__);
// console.log(gamename);
// console.log(gamename.length);
// console.log(gamename.toUpperCase());
// console.log(gamename.indexOf('k'))

// const newstring=gamename.substring(0,4)
console.log(gamename.substring(0,4));

console.log(gamename.slice(-8,4));  //slice can even take -ve numbers
console.log(gamename.trim())  //used to remove extra spaces



const url="https://p3rt3nn3mm3.com"
console.log(url.replace('3','r'))