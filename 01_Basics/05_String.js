const name="shweta";
const age=22;

// old way to concatenate string  console.log(name+ age);

//String interpolation

console.log(`Hello my name is ${name} and age is ${age}.`);


//Another way to write the string

const gameName=new String('Shweta-sm-d');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('t'));

//substring , slice(take negative value), relace, trim

const url="https://shweta.com/shweta%20mandavkar";

console.log(url.replace('%20','-'));

console.log(url.includes('shweta'));
console.log(gameName.split('-'));


