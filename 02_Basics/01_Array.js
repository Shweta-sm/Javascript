//Array

const myArr=[2,3,4,5,7];
// console.log(myArr[3]);

const fruits=["Mango","Banana","Apple"]

const myArr2=new Array(1,2,3,6);
// console.log(myArr2[3]);

//Array Methods

myArr.push(8); //add element at end
myArr.pop();  //remove element from end
myArr.unshift(9) //add element at start
myArr.shift() //remove elemennt from start

// console.log(myArr.includes(5));
// console.log(myArr.indexOf(4));
// console.log(myArr);


const newArr=myArr.join(); //combine the array and covert into string

// console.log( typeof newArr);

//++++++++++++++++++++Slice & Splice++++++++++

const NewArray=[0,1,2,3,4,5,6];
console.log("Original Array:" + NewArray);


const sliceArray=NewArray.slice(1,3);
console.log("SliceArray:"+ sliceArray);

console.log("Original Array:" + NewArray);


const spliceArray=NewArray.splice(1,4);
console.log("Splice Array:"+spliceArray);
console.log("Original Array:"+NewArray);

/*when used slice the its give slice array as per condition 
  but original array remains same (1,3 : then return value posituin 1,2 only skip 3)
  when used splice its give array as per condition but it modify the original array as well
  */







