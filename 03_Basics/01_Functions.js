function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("W");
    console.log("E");
    console.log("T");
    console.log("A");
}

//sayMyName// function refrence

//sayMyName(); //function exceution


// function addition(number1,number2){ // parameter
// console.log(number1+number2);

// }


function addition(number1,number2){ // parameter

//   let result=number1+number2
//   return result;

return number1+number2
  //after return statement no code is excecuted
  console.log("Shweta")

    
    }
    
let result=addition(2,4) //arguments
//console.log("REsult:",result)




function loginUserMessage(username){
    // if(username===undefined){
    //   console.log("Please enter the name");
    //   return
    // }
    //another way
    if(!username){
        console.log("Please enter the name");
        return
      }
    return`${username} just logged in`
}

//console.log(loginUserMessage());
/*console.log(loginUserMessage());
if user not passing any parameter then value should be undefined
*/


//rest operator :if u wanted to access multiple value at a time

function calculateCartPrice(...num1){
    return num1;
}

console.log(calculateCartPrice(100,200,300,4000));
//-------------------------------------------------------\


function calculateCartPrice2(val1,val2,...num1){
    return num1;
}
console.log(calculateCartPrice2(100,200,300,4000));
/*output: val1:100, val2:200 , ...num1:300,40000*/

//---------------------pass object into function(issue is type safety)--------

const user={
    username:"chips",
    price:123
}

function handleOject(anyobject){

    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }

    //handleOject(user)
    handleOject({
        username:"Shwteta",
        price:12000000
    })

  //-----------pass array into function-----
  
  const myNewArray=[200,300,4000,700]

  function arrayPass(getArray){
    return getArray[2]
  }
//console.log(arrayPass(myNewArray));

console.log(arrayPass([
    100,200,900
]));

