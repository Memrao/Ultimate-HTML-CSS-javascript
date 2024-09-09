// syntax

//let promise = fetch(url.[options])

const URL = "https://cat-fact.harokuapp.com";
const getFacts = async() => {
    console.log("getting data ...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);


};

//ajax...fetch api
//json ...retun promises....asynchronous