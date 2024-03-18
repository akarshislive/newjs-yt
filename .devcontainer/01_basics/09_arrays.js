const marvel_heros=["thor","batman","heman"]
const dc_heros=["thai","flash","poi"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

const all=marvel_heros.concat(dc_heros)
// console.log(all)

const another=[1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another=another.flat(Infinity)
//console.log(real_another);

console.log(Array.isArray("akarsh"))
console.log(Array.from("akarshisgreat hi"))


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


