// learn to use -----------------forof-----------------
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings="hello world!"
for (const greet of greetings) {
    // console.log(`each char is ${greet}`);
}

//---------------------maps-------------

const map=new Map()
map.set('IN',"india")
map.set('USA',"united states");
map.set('LN',"london")

console.log(map);


for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myobj={
    'game1':'NFS',
    'game2':'GTA'
}

for (const [key,value] of myobj) {
    // console.log(key,':-',value);
}

const map=new Map()
map.set('IN',"india")
map.set('USA',"united states");
map.set('LN',"london")

for (const key in map) {
    console.log(key);
   
}