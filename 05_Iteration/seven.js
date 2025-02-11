//Reduce
//shopping cart -billing
const mynum=[1,2,3]

// const myValue=mynum.reduce(function(acc,currval)
// {
//     console.log(`Acc:${acc} and CurrentVal:${currval}`);
    
//     return acc+currval;

// },0)

const  myValue=mynum.reduce((acc,currval)=>(acc+currval),0)
//console.log(myValue);


//Shopping cart

const ShoppingCart=[

 {itemName:"js course",
    price:999
 },
 {itemName:"py course",
    price:799
 },
 {itemName:"mobile dev course",
    price:9999
 },
 {itemName:"data science course",
    price:12999
 }


]

const PricetoPay=ShoppingCart.reduce((acc,item)=> acc+item.price,0)

console.log(PricetoPay);

//2.30.33