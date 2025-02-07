//global and block scope({})
let a =200
if(true){
    let a=10;
    const b=20;
    //var c=30 not used
   // console.log("Inner:",a);
    
}

//console.log(a);


//Nested Functions

function one(){
    const username="Shwtea";

    function two(){
        const website="Youtube";
        console.log(username);
        
    }
    //console.log(website);
    two();
}

//one();

//Nested If

if(true){
    const username="Shweta";
    if(username=="Shweta"){
        const website="youtube";
       // console.log(username+" "+website);
        
    }
    //console.log(website);
    
}
//console.log(username);


//-----------------
//error
console.log(addOne(3));
function addOne(num){
    return num+1;
}

//error
//addTwo();
const addTwo=function(num){
    return num+2;
}
