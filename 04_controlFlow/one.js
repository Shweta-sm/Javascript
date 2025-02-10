//if-else

// const balance=1000;

// if(balance>500){
//     console.log("Balance is greater than 500");
    
// }
// else{
//     console.log("Balance is less than 500");
    
// }

// Another way to write if
//if(balance>100) console.log("implicit conversion");

//else-if

// if(balance>500){
//     console.log("less than 500");
    
// }
// else if(balance>750){
//     console.log("les than 750");
    
// }
// else if(balance>950){
//     console.log("less than 950");
    
// }
// else{
//     console.log("less than 1200");
    
// }

//--------------------------

const userLoggedIn=true;
const debitCard=true;

const loggedinFromGoogle=true;
const loggedinFromEmail=false

if(userLoggedIn && debitCard){
    console.log("Allowed");
    
}

if(loggedinFromGoogle||loggedinFromEmail){
    console.log("user logged in");
    
}
