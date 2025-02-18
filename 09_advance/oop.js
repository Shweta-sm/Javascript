//object literal

const user={
    username:"shweta",
    loginCount:8,
    SingedIn:true,

    getUSerDetailed:function(){
        console.log("Got user detailed from db");
       // console.log(`Username:${this.username}`);
       console.log(this);
    }
}
console.log(user.username);
console.log(user.getUSerDetailed());


//Constructor : provide the new instance each time by using New keyword


function User(username,loginCount,isLoggedIn){
    this.username=username,
    this.isLoggedIn=isLoggedIn,
    this.loginCount=loginCount
    //return this
}

const userone=new User("shweta",8,true);
const usertwo=new User("Mansi",9,false);

console.log(userone);
console.log(usertwo);




