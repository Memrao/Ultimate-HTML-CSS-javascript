//conditional statements
// if statement..................
let age = 12;
let mode = "dark";
let color;
// if (age > 18) {
//     console.log("You can vote");

// }

// if (age < 18) {
//     console.log("You can not vote");

// }
if (mode === "light") {
    color = "white";
}
if (mode = "dark") {
    color = "black";
}
//console.log(color);

// if-else condition-----------
if (mode === "dark") {
    color = "black";
} else {
    color = "white";
}
//console.log(color);

//another example
if (age >= 21) {
    // console.log("You can vote");

} else {
    //console.log("You Can Not vote");

}

//another exapmle
// odd-even numbers
//..even
let num = 3;
if (num % 2 == 0) {
    //console.log(num, " is Even");

} else {
    //console.log(num, " is odd");
}

//else-if ccondition.......
// for multiple conditions
if (mode === "dark") {
    color = "black";
} else if (mode === "blue") {
    color = "blue";
} else if (mode === "pink") {
    color = "pink";
} else {
    color = "white";

}
//console.log(color);

//Ternary operator
let result = age >= 18 ? "adult" : "not adult";
//console.log(result);

//switch statement
const expr = "papaya";
switch (expr) {
    case 'Oranges':
        //console.log("Oranges are expesive. ");
        break;
    case "Mangos":
        //console.log("Not much xpensive");
        break;
    default:
        //console.log(`sorry we are  out of ${exor}.`);


}

//practice question...--------------

// adult("Hello"); // pop up msg

//promt
//let name = prompt("hello!");
//console.log(name);

// Q1. Get user to input a number using promt ("Enter a number:").Check if the number is a multiple of 5 or not.
//prompt("Enter a number")

let num1 = prompt("enter a number");
if (num1 % 5 === 0) {
    //console.log(num1, "Is multiple of 5");

} else {
    //console.log(num1, "not a multiple of 5");

}

// Q2. Get user to input a number using promt ("Enter a number:").Check if the number is a multiple of 3 or not.

let num2 = prompt("Enter a number");
if (num2 % 3 === 0) {
    // console.log(num2, "Is a multiple of 3");

} else {
    //console.log(num2, "Not a mul.tiple of 3");

}

//Q3.write a code which can give grades to students according to their scores:  90-100 A, 70-89 B , 60-69 C , 50-59 D , 0-49 F ....

let score = 95;
let grade;
if (score >= 90 && score <= 100) {
    //console.log(grade, "A Grade");

} else if (score >= 70 && score <= 89) {
    //console.log(grade, "B Grade");

} else if (score >= 60 && score <= 69) {
    //console.log(grade, "C Grade");

} else if (score >= 50 && score <= 59) {
    //console.log(grade, "D Grade");

} else if (score >= 0 && score <= 49) {
    //console.log(grade, "Fail");

}
//console.log("according to your result ,your grade was", grade);