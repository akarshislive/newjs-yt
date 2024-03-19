(function chai(){

    //named iife
console.log(`db connected`);
})();


( (name)=>{
    //unnamed iife 
console.log(`db connected to ${name}`);
} )('akarsh');