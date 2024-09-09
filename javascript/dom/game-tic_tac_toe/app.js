let boxes = document.querySelectorAll(".box"); // access box
let resetBtn = document.querySelector("#reset-btn"); // access reset button
let newGameBtn = document.querySelector("#new-btn"); // access new game button
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player O starts the game

// Store winning patterns in a variable (2D array)
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Function for a new game: all buttons are enabled and board is cleared
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    boxes.forEach(box => box.innerText = ""); // Clear all box texts
}

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) { // If it's player O's turn
            box.innerText = "O";
            turnO = false; // Switch to player X's turn
        } else {
            box.innerText = "X"; // Player X's turn
            turnO = true; // Switch to player O's turn
        }
        box.disabled = true; // Disable the clicked box
        checkwinner(); // Check if there's a winner after each move
    });
});

// Disable all boxes once a player wins
const disableBoxes = () => {
    boxes.forEach(box => box.disabled = true);
};

// Enable the boxes for a new game
const enableBoxes = () => {
    boxes.forEach(box => box.disabled = false);
};

const showwinner = (winner) => {
    msg.innerText = `Winner: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes(); // Disable all boxes after a win
};

const checkwinner = () => {
    for (let pattern of winpatterns) {
        let posva1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        // Check if the value is empty
        if (posva1 !== "" && posval2 !== "" && posval3 !== "") {
            if (posva1 === posval2 && posva1 === posval3) {
                showwinner(posva1); // Show the winner
                return;
            }
        }
    }
};

// Add event listeners for the new game and reset buttons
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);