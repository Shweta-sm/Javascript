//Singleton 
//Object.create()

// Object literal

const mySym=Symbol("key1");

const jsUser={
    name:"Shweta",
    age:22,
    [mySym]:"Symkey1",
    Location:"Mumbai",
    email:"Shweta@gmail.com",
    isLoggedIn:false,
    LastLoggedDay:["Monday","Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["name"]);
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

//if u wnat to change the value
jsUser.email="Shweta@google.com";

//Object.freeze(jsUser);

jsUser.email="shweta@microsoft.com";
//console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
    
}
jsUser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
