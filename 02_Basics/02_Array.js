const marvel_heros=["spiderman","thor","Ironman"];

const dc_heros=["batman","superman","flash"]
//marvel_heros.push(dc_heros);
// console.log(marvel_heros); // op:[ 'spiderman', 'thor', 'Ironman', [ 'batman', 'superman', 'flash' ] ]


//concat(retunr new array)

const ConcatArray=marvel_heros.concat(dc_heros);
//console.log(ConcatArray);

//spread operator

const all_new_array=[...marvel_heros,...dc_heros]
//console.log(all_new_array);

//Flat()

const another_Array=[1,2,3,[4,5,6],7,[8,9,10],11];
const new_another_Array=another_Array.flat(Infinity);
//console.log(new_another_Array);


console.log(Array.isArray("Shweta"));
console.log(Array.from("Shweta"));
console.log(Array.from({name:"shweta"})); //interesting op:[]

//when we wanted to combine multile varibale in one single array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

