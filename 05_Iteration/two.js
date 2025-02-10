//for Of
const myArray=[1,2,3,4,5]
for (const num of myArray) {
    //console.log(num);
    
}

const greeting="Hello world"
for (const greet of greeting) {
 //console.log(greet);
    
}

//maps
/*map object holds key-value pairs and remenmber the  original sequence of the keys or insertion order of the key*/

const map=new Map()

map.set("IN","India");
map.set("USA" ,"United state of America")
map.set("FR","France");
map.set("IN","India")

//console.log(map);

for (const [key,value] of map) {
    console.log(key ,":-",value);
}

//for of not iterrable on the objects