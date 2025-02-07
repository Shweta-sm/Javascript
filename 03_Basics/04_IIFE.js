//Immediately invoked Function Expression

(function chai (){
    //named iife
    console.log("DB Connected");
})();

((name)=>{
    console.log(`Db Connected two ${name}`);
    
})('Shweta')


//in IIFE need to add the semicoln to stop the function excecution

