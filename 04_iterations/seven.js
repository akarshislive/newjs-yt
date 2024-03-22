const mynums=[1,2,3,4,5,6,7,8,9,10]
// const x=mynums.map((num)=>num*10)
// console.log(x);

const x=mynums
        .map((num)=>num*10)
        .map((num)=>num+1)
        .map((num)=>num*(num-1))
        .filter((num)=>num>=5000)

console.log(x);
