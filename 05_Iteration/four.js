//For each loop

const coding=["js","java","cpp","py"]

// coding.forEach(function(val){
//     console.log(val);
    
// })

//Arrow Function


// coding.forEach((item)=>{
// console.log(item);

// })


// function printme(item){
// console.log(item);

// }

// coding.forEach(printme)

//--------------------------

coding.forEach((item,index,arr)=>{
 //console.log(item,index,arr);
})


//--------------------------------
//objects inside the array

const myCoding=[

    {
        languageName:"javascript",
        languageFilename:'js'
    },

    {
        languageName:"java",
        languageFilename:'java'
    },
    {
        languageName:"python",
        languageFilename:'py'
    }

]


myCoding.forEach((item)=>{
console.log(item.languageFilename);

})