//Dates

let myDate=new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

// console.log(typeof myDate);


//++++for specific date
//months starts from the 0-11
let CreatedDate=new Date(2025,11,6);
// console.log(CreatedDate.toDateString());

let CreatedDate1=new Date(2025,11,6,5,3);
// console.log(CreatedDate1.toLocaleString());

//specific format(yyyy-mm-dd)(mm-dd-yyyy)

let CreatedDate2=new Date("2025-11-06");
// console.log(CreatedDate2.toLocaleString());

//Time
let TimeStamp=Date.now()
// console.log(TimeStamp);
// console.log(CreatedDate2.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate=new Date()

console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})










