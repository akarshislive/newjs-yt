// for (let index = 0; index < 10; index++) {
//     if(index==5){
//         console.log("5 is best");
//     }
//     console.log(index);
// }

for (let i = 1; i <=5 ;i++) {
    // console.log(`outer loop value:${i}`); 
    for (let j = 1; j <=5;j++) {
        // console.log(`inner loop value:${j} and inner loop:${i}`); 
        // console.log(i+'*'+j+'='+ i*j);   
    }
}

let my=["flash","bat","cock"]
// console.log(my.length);
for (let index = 0; index < my.length; index++) {
    const element = my[index];
    // console.log(element);
}

for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log('detected 5');
        break;
    }
//    console.log(`value of i is ${index}`);
}


for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log('detected 5');
        continue;                   //skips one time
    }
   console.log(`value of i is ${index}`);
    
}