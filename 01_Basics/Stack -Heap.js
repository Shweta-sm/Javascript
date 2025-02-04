//2 types of memory : stack (Primitive(value type:actual value remains same ,make the copy)), heap(Non primitive(Refrence type: actual value get change))


let myName="shweta";
let anotherName=myName;
 anotherName="Mansi"

 console.log(anotherName);
 console.log(myName);


 //reference type(Heap)

 let Userone={ 
 email:"sm@google.com",
 upi:"user@ybl",

 }
 let usertwo=Userone;
 usertwo.email="Shweta@gmail.com";

 console.log(usertwo);
 console.log(Userone);
 
 