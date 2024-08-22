// Array of cards content (for demonstration purposes)
const cards = [
    "This System Provides E-Attendance. Students just need to show their card. The system will mark present."

];

// Tracking the Current Step - starts at 0, meaning the card starts in the first column.
let step = 0;

// Selecting DOM Elements
const columns = document.querySelectorAll(".column");

// Create the Card Container (div)-----------------------------------------------------------------
const card = document.createElement('div'); //A new div element is created and stored in the card variable.
card.classList.add('card'); //The classList.add('card') method adds a class named card to the div element.
const cardHeading = document.createElement('h3'); //for heading 
cardHeading.textContent = 'Card'; //The text "Card" is set as the content of this heading.
const cardText = document.createElement('p'); //for paragrdaph
cardText.textContent = cards[0]; // Start with the first card content

// div container for button --------------------------------------------------------------------------
const buttonContainer = document.createElement('div');

//Create and Append the Next and Back Buttons
const nextButton = document.createElement('button'); //create button for next
nextButton.id = 'nextbutton'; //next button
nextButton.classList.add('buttons');
nextButton.textContent = 'Next';

const backButton = document.createElement('button'); //create button for back
backButton.id = 'backbutton';
backButton.classList.add('buttons');
backButton.textContent = 'Previous';

buttonContainer.appendChild(nextButton);
buttonContainer.appendChild(backButton);

card.appendChild(cardHeading);
card.appendChild(cardText);
card.appendChild(buttonContainer);

// Insert the card into the first column
columns[0].appendChild(card);

// Update Button Visibility Function
const updateButtonsVisibility = () => {
    backButton.style.visibility = step === 0 ? "hidden" : "visible";
    nextButton.style.visibility = step === columns.length - 1 ? "hidden" : "visible";
};

updateButtonsVisibility();

//--------------------------------------------Events--------------------------------------
// Event Listener for "Next" Button
nextButton.addEventListener("click", () => {
    if (step < columns.length - 1) { // If the card is not in the last column
        columns[step + 1].appendChild(card); // Move the card to the next column

        step++;
        updateButtonsVisibility();
    }
});

// Event Listener for "Back" Button
backButton.addEventListener("click", () => {
    if (step > 0) { // If the card is not in the first column
        columns[step - 1].appendChild(card); // Move the card to the previous column

        step--;
        updateButtonsVisibility();
    }
});






















// // cards using if-else statements
// function showCard(cardNumber) {
//     // Hide all cards first
//     document.getElementById("card1").style.display = "";
//     document.getElementById("card2").style.display = "";
//     document.getElementById("card3").style.display = "none";


//     if (cardNumber === 1) {
//         document.getElementById("card1").style.display = "block";
//     } else if (cardNumber === 2) {
//         document.getElementById("card2").style.display = "block";
//     } else if (cardNumber === 3) {
//         document.getElementById("card3").style.display = "block";
//     }
// }
// const buttons = document.querySelectorAll('.buttons');
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function() {
//         if (this.id === 'mode1') {
//             showCard(2);
//         } else if (this.id === 'mode2') {
//             showCard(3);
//         } else if (this.id === 'mode4') {
//             showCard(1);

//         } else if (this.id === 'mode3') {
//             showCard(2);

//         } else if (this.id === 'mode4') {
//             showCard(1);
//         }
//     });
// }