//syntax
 //if(condition){
  
// }
//-----------------------------------------------------
// if(2==2){
//     console.log("executed1");
// }
// if(2=="2"){
//     console.log("executed2");
// }
// if(2==="2"){
//     console.log("executed3");
// }


//-----------------------------------------------------

const x=2;
if(x>5){
    console.log("greter than 5");
}
else{
    console.log("smaller than 5");
}


const y=200;
if(y>100){
    const pow="fly";
    console.log(`user power:${pow}`);
}

//--------------------------------------------------
const userlog=true;
const debit=true;
const a=1;

if(userlog && debit && a=="1"){
    console.log("allowed");
}
else{
    console.log("fuck");
}


if(userlog || debit){
    console.log("ooged in");
}