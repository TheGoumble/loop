// for (key in object){
//     statement
// }

// const obj = {a: 1, b: 2, c: 3}
// for (const key in obj){
//     console.log(key)
// }

//for in loop - iterates over peroperties of an object 
//object - {"key": valse} pair
//key - property of the object


const object = {
    name: "bruh",
    age: 100,
    inClass: true,
}

for(const key in object){
    console.log(key)
}


for(const key in object){
    console.log(object[key])
}
