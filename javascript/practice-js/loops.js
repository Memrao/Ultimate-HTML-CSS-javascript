//loops
//for loop
let count;
for (count = 1; count <= 1500; count++) {
    //console.log("My World");

}
//console.log("Loop has ended");

// q1.calculate sum of 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum = sum + i; // sum=0+1. sum=1, sum=1+2, sum=3+3,sum=6+4,sum=10+5...15..output is 15
}
//console.log("sum= ", sum);
//console.log("Loop has ended");

//q2.calculate sum of 1 to n
let sum1 = 0;
let n = 3;
for (let i = 1; i <= n; i++) {
    sum1 = sum1 + i; //sum=0+1, sum=1+2,sum=3+3, sum=6;
}
//console.log("sum1= ", sum1);
//console.log("Loop has ended");

//q2.calculate sum of 1 to 100
let sum2 = 0;
let n1 = 100;
for (let i = 1; i <= n1; i++) {
    sum2 = sum2 + i;
}
//console.log("sum2= ", sum2);
//console.log("Loop has ended");

// print value of i for 1 to 5 times
let i;
for (let i = 1; i <= 5; i++) {
    //console.log("i= ", i);
}
//console.log(i); 

//while loop----------------------------------------

let j = 1;
while (j < 5) { //1<5=T, 2<5=T, 3<5=T,  4<5=T, 5<5=F....output is
    //console.log("My Worlds");
    //j++;

}
// while loop may condition start may hi pta chal jati hy
//do while----------------------------------------
// do-while loop aik bar lazmi chaly ga ..usky bad last may jakr condition check krty ga................

let k = 90;
do {
    // console.log("MY world");
    k++;
} while (k <= 90);

// for-of  ..loop...help krty hain strings or array k upr loop lgana......objects k liay use nahi hoty hain.....

// iterator on string 
let str = "Memona Talha"
for (let i of str) {
    //console.log("i "), i;

}

//count lenght of string

let str1 = "Flying Officer Memona";
size = 0;
for (let i of str) {
    //console.log("i ", i);
    size++;

}
//console.log("string size= ", size);


// for in loop----------------------
///used for objects

// student  object . --
let student = {
    name: "Memona Nisar", //key values
    age: 21,
    gender: "Female",
    cgpa: 3.4,
    ispass: true

};

for (let i in student) {
    //console.log(i); //print only keys..
    //console.log("keys= ", key, "values= ", student[key]); //print keys with values
}

//Q1. print all the even numbers 0 to 100


for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        //console.log("Value is even");

    }
}

//Q2. print all the odd numbers 0 to 100

for (let i = 0; i <= 100; i++) {
    if (i % 2 !== 0) {
        //console.log("Odd");


    }
}
//Q3. Create a game where you start with any random game number .Ask the user to keep guessing the game number untill the user enters correct value.

let gamnum = 30;

let usernum = prompt("Guess the game number");

while (gamnum != usernum) {
    usernum = prompt("Wrong,Guess the game number again");
}
console.log("Congratulations. you won ");