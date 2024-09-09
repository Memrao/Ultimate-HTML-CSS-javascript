//synchronous programming
// an instruction... one by one ..waiting
//jis sequence may code likha hy usi formate may kam hoga


// console.log("one");
// console.log("Two");
// console.log("Three");


//asynchronous

// function hello() {
//     console.log("hello");

// }
// setTimeout(hello, 2000) //set time,when the output executes...


setTimeout(() => {
    //console.log("Hello");

}, 4000); //timeout
//console.log("two");

//callbacks
function sum(a, b) {
    //console.log((a + b));

}

function calculator(a, b, sumCalllback) {
    sumCalllback(a, b);

}
calculator(1, 2, (a, b) => {
    //console.log(a + b);

});

//callback hell...nested call back
//nested if-else
let age = 19;
if (age >= 18) {
    if (age >= 60) {
        //console.log("Senior");

    } else {
        //console.log("Niddle");

    }

} else {
    //console.log("child");

}

//nested loop
// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (j = 0; j < 5; j++) {
//         //console.log(j);
//         str = str + j;

//     }
//     // console.log(i, str);
// }

//call back hell

function getData(dataId, getNextData) {
    setTimeout(() => {
        // console.log("data", dataId);
        if (getNextData) {
            getNextData();

        }

    }, 2000);
}
getData(1, () => {
    //console.log("getting data2....");
    getData(2, () => {
        //console.log("getting data3..");
        getData(3, () => {
            //console.log("getting data4...");

        })

    })

});


// to solve call back hell problem we have promises..
//in this ..ya to kam hojaey ga ya phr reject hojaey ga

//syntax
//let promise=new((resolve,reject)=>{})

// let promise = new Promise((resolve, reject) => {
//     console.log("Im a promise");
// });

function asyncFunc() {
    return new Promise((reolve, reject) => {
        setTimeout(() => {
            //console.log("some data");
            reolve("success");

        }, 3000);
    })
}

//console.log("fetching data");
let p1 = asyncFunc();
p1.then((res) => {
    // console.log(res);

})

//promises chain..............==
console.log("getting data......");
getData(1)
    .then((res) => {
        console.log("getting data2.....");
        return getData(2);
    })
    .then((res) => {
        console.log("getting data3....");
        return getData(3);
    })
    .then((res) => {
        console.log(res);
    });





//async-await...............................
//syntax
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather data");
//             resolve(200);

//         }, 2000);
//     })
// }
// async function getWeatherData(params) {
//     await api();
//     await api();
// }

//..Mostly used in programming.....
function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //console.log("data", dataId);
            resolve("success");

        }, 2000);
    })
}
async function getAllData() {
    //console.log("getting data1...");
    await getData(1);
    //console.log("getting data2...");
    await getData(2);
    //console.log("getting data3...");
    await getData(3);
    // console.log("getting data4...");
    await getData(4);
    // console.log("getting data5...");
    await getData(5);
    //console.log("getting data6...");
    await getData(6);

}