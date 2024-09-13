// strings in js-----------------------
//strings are immputable(unchanged)...can not be change in the js

const name = "Memona"
const repoCount = 50

//console.log(`Hello My name is ${name} and my repo cout is  ${repoCount}`);// templet literal

//---------------------------------------------------strings--------------------------------------------/
//2 types to create string..double qoutes, single qoutes

//create string
let str = "Memona";
let str1 = 'Rao';

//console.log(str[0]); // string on the index,,can be access too
//string length-----------------
str.length

//string singular form===index, plural form==indices
str[0], str[1], str[2]

//--------------------------------Templete literals-----------------------------------------------------------/

//e.g   =
// `anything in the back tag can be called templet literal`

let sentence = `This is a templet literal`; //used back tags....
//console.log(sentence);

// practical example for why used back tags
let obj = {
    item: "pen",
    price: 10,
};
//console.log("The cost of ", obj.item, "is ", obj.price);
//ismy chunks may strings bnay huay hain jiski wja sy time wasste hota hay is sy bachnay k liay templet literal use krty hain..--

//------------in templete literal ..objs
let output = (`The cost of ${obj.item} is ${obj.price} rupees`);
//console.log(output); // everything is a part of the string in the templete literal...=== numbers bhi string ka part ban jaty hain


//another example
let specialstring = `This is a templete lieteral ${1+3+4+3}`;
//console.log(specialstring);

//----------------------------------------escape characters-----------------------------------/
//boht bara output hay to \n lga dena  for next line..e.g  \n & \t.

//console.log("Memona \n Rao"); //next line
//console.log("Memona \t Rao"); //used for create gap or space in between the strings

// print string length(escape characters)

let str22 = "Memona\tTalha"; //12..\t ..both have a single value only
//console.log(str.length);


//----------string methods-----------------------------------------------------------------------/
// method (Kuch bhi kaam krky dena)... methods in js
//1.str.toUpperCase()
//2.str.toLowerCase()
//3.str.trim()

let str2 = "Memona Talha";
newstr = str2.toUpperCase();

//console.log(str2);
//console.log(newstr); //string ki value change nai hoti hay is liay isko aik alag string(new string) may print krwa rhy hain

//str.trim //remove white spaces

let str3 = "   Memona Talha   ";
//console.log(str3.trim());

// slice method---cut the string from user requirements---

let str4 = "Heyqqqqqqqqqq";
//console.log(str4.slice(1, 4));

// string contatenation..strings ko jorna--
let str5 = "Tm Engineering Services";
let str6 = "pvt ltd";
//let res = str5.concat(str6); 1st method

//let res = str5 + str6; //2nd method

//let res = "Iam the owner of " + str5 + str6; // 3rd method

//res = "Memona" + 123;// 4th method

//console.log(res);

//---Replace Method---

let str7 = "Hello";
//console.log(str7.replace("H", "Y")); // convert hello to yollow

// length counter
let str8 = "ILOVETALHA"
    //console.log(str.charAt(0));


//Practice proble
// Q1. promt the user to entire the full name .generate a username for them based on the inpout .Start usernmame with @, Followedx by therir full name and ending with the fullname lenght..e.g usernmae="Memona",username should be "@Memona@123"


//username generator like , twiter, email or other apps generate.

let fullname = prompt("Enter the username");

let username = "@" + fullname + fullname.length;
console.log(username);

//fullname= memona...after generated username.....@memona6