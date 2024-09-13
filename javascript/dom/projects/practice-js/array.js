// array...colloection of 
// array aik object hoti hay js may



//----------------data storing using array----------------------------
// for numbers
let marks = [90, 97, 95, 94, 99, 100]
    //console.log(marks);
    //console.log(marks.length);

// for names
let heros = ["Memona", "Talha", "Usman", "Umer", "Ali", "Maryam"]

//console.log(heros);


//----------------array indices(indexes)

//to print elements (Names)
for (let hero of heros) {
    //console.log(hero);

}

//print different cities

let cities = ["Karachi", "Islamabad", "Pindi", "Attock", "Hyderabad"]
for (let city of cities) {
    console.log(city.toUpperCase());

}

//PRactice Question
//Q1. For a given array with marks of students ->[85,97,44,37,76,60].Find the average marks of the entire class.

let marks1 = [85, 97, 44, 37, 76, 60]
let sum = 0;
for (let mark of marks1) {
    sum = sum + mark;


}
let avg = sum / marks1.length;
console.log(`The average marks of the class= ${avg}`);

//Q2. For a given array with prices okf 5 itmes->[250,645,300,900,50] All items have an offer of 10% off on them. Change the array to store final price after applying offer-

let items = [250, 645, 300, 900, 50]
    // for (let i = 0; i < items.length; i++) {
    //     let offer = items[i] / 10;
    //     items[i] -= offer
    // }
    // console.log(items);

for (let item of items) {
    let offer = item / 10; //10 % off value..e.g 10% of 100% is 10
    items[i] = items[i] - offer;
    console.log(`10% of sale offer =${item[i]}`);


}