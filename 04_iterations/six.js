//foreach---- is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array
const coding=["js","ruby","java","python"]
coding.forEach( (item)=> {
    // console.log(item);
})

const mynums=[1,2,3,4,5,6,7,8,9,10]
//const x=mynums.filter((num)=> num>4)          //creates a new array filled with elements that pass a test provided by a function
// console.log((x));

const y=[]
mynums.forEach((num)=>{
    if(num>4){
        y.push(num)
    }
})
// console.log(y);


const books = [
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    publishYear: 1954,
    edition: 1,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    publishYear: 1813,
    edition: 3,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Historical Fiction",
    publishYear: 1960,
    edition: 2,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    publishYear: 1979,
    edition: 5,
  },
  {
    title: "One Hundred Years of Solitude",
    genre: "Magical Realism",
    publishYear: 1967,
    edition: 4,
  },
  {
    title: "Frankenstein",
    genre: "Gothic Fiction",
    publishYear: 1818,
    edition: 1,
  },
  {
    title: "The Catcher in the Rye",
    genre: "Coming-of-Age",
    publishYear: 1951,
    edition: 7,
  },
  {
    title: "Moby Dick",
    genre: "Adventure",
    publishYear: 1851,
    edition: 6,
  },
];

const a=books.filter((bk)=> bk.publishYear>=1920)
console.log(a)