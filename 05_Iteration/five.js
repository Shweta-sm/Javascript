// const coding=["js","py","java","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
//     return item
//     //doesn't retuern any thing
    
// })
// console.log(values);


//filter : returns value

const Mynums=[1,2,3,4,5,6,7,8,9,10]

const newMyNums=Mynums.filter((num)=>num>5)
//console.log(newMyNums);


//when we use {} used return keyword
const newNum=Mynums.filter((num)=>{
    return num<6
})
//console.log(newNum);

//Using for each

const myArray=[1,2,3,4,5,6,7,8,9,10]

const arr=[]

myArray.forEach((num)=>{
    if(num>4){
        arr.push(num)
    }
})
console.log(arr);

/* 
const books=[{},{},{},{},{}]

let userBook=books.filter((bk)=>bk.genre==='Histroy')

userBook=books.filter((bk)=>{ 
    return bk.publish>=2000 && bk.genre==='Histroy'
     })
console.log(userBook)
*/

