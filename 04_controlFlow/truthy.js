//falsy value
//-> false, 0 ,-0, BigInt 0n, null, undefined,NaN,""

//Truthy value
//->"0", 'false', [],{},function(){}," "

//check array and object is empty or not

// const userEmail=[]

// if(userEmail.length==0){
//     console.log("Array is empty");
    
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("Object is empty");
    
// }


//Nullish coalescing operator(??): null undefined

let val1;
// val1 = undefined ?? 10
// val1 = null ?? 10
// val1 = 5 ?? 10
// val1 = null ?? 10??20 //10
console.log(val1)


//ternary Operator

//condition ? true : false

let iceTeaPrice=100;

iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");


