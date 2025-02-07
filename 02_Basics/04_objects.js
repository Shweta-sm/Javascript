//Object declaration

//const tinerUser=new Object();
const tinerUser={};
tinerUser.id="123abc";
tinerUser.name="shweta Mandavkar";
tinerUser.isLoggedIn=false;
//console.log(tinerUser);

const regularUser={
    email:"Shweta@gmail.com",
    FullName:{
        UserFullname:{
            Firstname:"shweta",
            Lastname:"Manddavkar"
        }
    }
}

//console.log(regularUser.FullName.UserFullname.Firstname);

//comnbine two objects

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const Obj3=Object.assign({},obj1,obj2)

//using spred operator
const Obj3={...obj1,...obj2}

//console.log(Obj3);



//++++++++++++++++++


const User=[
{'id':1,
   'name':"shweta" 

},
{'id':2,
    'name':"mansi" 
 
 },
 {'id':3,
    'name':"snehal" 
}]

//console.log(User[0].name);

//console.log(tinerUser);
console.log(Object.keys(tinerUser));
console.log(Object.values(tinerUser));
console.log(Object.entries(tinerUser));


console.log(tinerUser.hasOwnProperty('isLoggedIn'));



