"use strict" // treat all js code as newer version

// number =>2 to power 53......used for stock market

// string=>""
// boolean=>true/false
//null .empty value ,,can also declared as null....stand alone value
// undefined =>
// symbol => unique
// object

let name = "Memona"
let age = 21

//typeof...find datatype of the variable
//console.log(typeof "hello")
//console.log(typeof age)
//console.log(typeof null) //object..language error
//console.log(typeof undefined)

//......................practice start..........

let score = "33abc"
console.log(typeof(score)) // string value

let valueInNumber = Number(score) // convert any value in numbers
console.log(typeof valueInNumber)

// "33 " convert into "33" easily hojata hy 
//"33abc" =>NAN .apear....numbers may convert nai hoskta

// true => 1; false =0;

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


// to check and covert number to string

let sameNumber = 33
let stringNumber = String(sameNumber)
console.log(typeof stringNumber)