// signleton ..
//const abcuser = new Object()


//constructor....object.create 

// object literal
const jsUser = {
    name: "Memona",
    age: 18,
    location: "Karachi",
    email: "memrao@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]


}


// console.log(jsUser.email);

const timerUser = {}
timerUser.id = "2323"
timerUser.name = "Memo"
timerUser.isLoggedIn = false
    // console.log(timerUser);

const regularuser = {
        email: "an@gmail.com",
        fullname: {

            userfullname: {
                firstname: "Mem",
                lastname: "Rao"


            }
        }
    }
    // console.log(regularuser.fullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
    // const obj3 = { obj1, obj2 }
const obj3 = Object.assign()
console.log(obj3);