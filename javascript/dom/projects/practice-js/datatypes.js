"use strict" // treat all js code as newer version

// number =>2 to power 53......used for stock market

// string=>""
// boolean=>true/false
//null .empty value ,,can also declared as null....stand alone value
// undefined =>
// symbol => unique
// object

// let name = "Memona"
// let age = 21

//typeof...find datatype of the variable
//console.log(typeof "hello")
//console.log(typeof age)
//console.log(typeof null) //object..language error
//console.log(typeof undefined)

//......................practice start..........

// let score = "33abc"
// console.log(typeof(score)) // string value

// let valueInNumber = Number(score) // convert any value in numbers
// console.log(typeof valueInNumber)

// "33 " convert into "33" easily hojata hy 
//"33abc" =>NAN .apear....numbers may convert nai hoskta

// true => 1; false =0;

// let isLoggedIn = 1
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);


// to check and covert number to string

// let sameNumber = 33
// let stringNumber = String(sameNumber)
// console.log(typeof stringNumber)

// 2 types of datatypes
//primitive type
//non p;rimitive type


//primitive types..............
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId);

//non primitve type or reference type.............

// const heros = ["shakt iman", "hello", "doga"]
// let myObj = {
//     name: "hi tech taxila",
//     age: 22
// }
// console.log(typeof anotherId);

//------------------Memories--------------
//1. stack (primitive)
//2.heap (non-primitive)

//stack..numbers,booleans
let myyoutubename = "tech sol"
let anothername = myyoutubename
anothername = "chaiorcode"
console.log(myyoutubename);
console.log(anothername);

// heap  ,,reference  
let userone = {
    email: "abc@gmail.com",
    sadapay: "03303967609"
}

let userTwo = userone
userTwo.email = "abcs@gmail.com" //access thorugh object
console.log(userone.email);
console.log(userTwo.email);