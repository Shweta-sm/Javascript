//First way to right 
const promiseOne=new Promise(function(resolve,reject){
//Do an async task
//Db calls, cryptography, network

setTimeout(function(){
    console.log("async task is complete");
    resolve();
},1000)
})


promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

//Second way to write

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Asysnc  2 resolved");
    
})

//Third way

const PromiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"Chai@example.com"})
    },1000)
})

PromiseThree.then(function(user){
console.log(user);
})

//Fourth way

const PromiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"Shweta",Password:"123"})
        }
        else{
            reject('Error: Something went wrong')
        }
    },1000)
})

PromiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(()=>{console.log("The promise is either resolved or rejected");
})


//Fifth way


const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"JavaScript",Password:"123"})
        }
        else{
            reject('Error: js went wrong')
        }
    },1000)
})

async function consumedPromiseFive(){
    try {
        const response=await promisefive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumedPromiseFive()

///get user data

// async function getallusers() {

//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')

//         const data=await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// getallusers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
})