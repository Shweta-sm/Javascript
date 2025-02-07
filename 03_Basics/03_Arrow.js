const user={
    username:"Shweta",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage();
// user.username="Sammmy";
// user.welcomeMessage();

//console.log(this) //retuens object{}

//when we run this on browswer they return window function


//Arrow functions

// const addOne=(num1,num2) => {
//     return num1+num2;
// }

//implicit return

//const addOne=(num1,num2) => num1+num2;
//const addOne=(num1,num2) => (num1+num2);

//object return

const addOne=(num1,num2) => ({username:"shweta"});
console.log(addOne(3,3));

