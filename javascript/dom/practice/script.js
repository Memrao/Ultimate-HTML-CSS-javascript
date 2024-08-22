//for background color change..by prasing button

//load html code ,,usky bad modeBtn may store krdia hy
let modeBtn = document.querySelector("#mode1");
let currMode = "Light"; //dark
modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";

    } else {
        currMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currMode);

});