//reduce method---------

const mynums=[1,2,3,4,5]
const x=mynums.reduce(function(acc,currval){
    // console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},0)
// console.log(x);



const shoppingCart = [
    {
      itemName: "Milk",
      price: 2.50,
      expiryDate: new Date("2024-04-20"), // Adjust date as needed
      edition: "N/A", // Can be removed if not applicable
    },
    {
      itemName: "Eggs",
      price: 3.99,
      expiryDate: new Date("2024-04-15"), // Adjust date as needed
      edition: "N/A", // Can be removed if not applicable
    },
    {
      itemName: "Bread",
      price: 1.99,
      expiryDate: new Date("2024-03-29"), // Adjust date as needed
      edition: "Whole Wheat",
    },
    {
      itemName: "Apples",
      price: 2.49,
      expiryDate: new Date("2024-05-01"), // Adjust date as needed
      edition: "N/A", // Can be removed if not applicable
    },
  ];
  
  console.log(shoppingCart);

  const total=shoppingCart.reduce((acc,x)=>acc+x.price,0)
  console.log(total);