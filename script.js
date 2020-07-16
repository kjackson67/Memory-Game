// console.log("running");
const cards = document.querySelectorAll(".card");
const deck = document.querySelector("#deck");
const button = document.querySelector(".game-reset");
const names = ["Walter Peyton", "Gale Sayers", "Mike Ditka", "Dick Butkus", "Gary Fencik", "Walter Peyton", "Gale Sayers", "Mike Ditka", "Dick Butkus", "Gary Fencik"];
let counter = 0;
let moves = document.querySelector(".game-counter");
let compareArray = [];

for (let i = 0; i < names.length; i++) {
    cards[i].setAttribute("value", names[i]);
}

// resetting moves in game //
counter = 0;
moves.innerHTML = counter;
for (let i = 0; i < moves.length; i++) {
    moves[i].style.color = "red";
    moves[i].style.visibility = "visible";
}

// choosing card(s)
cards.forEach(card => {
    card.addEventListener("click", checkClicks);
})

function checkClicks() {
    console.log(this);
    if (counter < 2) {
        let value = this.getAttribute("value");
            console.log(value);
        counter ++;
        this.innerText = value;
        compareArray.push(this);
        if (counter >= 2) {
            checkMatch();
            console.log(compareArray);
        }
    }
}


// match or not matched
function checkMatch () {
    if (compareArray[0].getAttribute("value") === compareArray[1].getAttribute("value")) {
        // reset counter to 0 if match
        // remove event.listener from matching cards
        console.log("match");
        console.log(compareArray);
        counter = 0;
        compareArray[0].removeEventListener("click", checkClicks);
        compareArray[1].removeEventListener("click", checkClicks);
        compareArray = [];
        } else {
            compareArray[0].innerText = "";
            compareArray[1].innerText = "";
            counter = 0;
            compareArray = [];
        // dont match hide selections
        // reset counter to 0
        console.log("wrong");
    };
}

// function unClick() {
//     compareArray[0].classList.remove("value");
//     compareArray[1].classList.remove("value");
//     compareArray = [];
// }

// function disable() {
// }

// function openCard() {
//     compareArray.push(this);
//     let length = compareArray.length;
//     if(length === 2) {
//         gameCounter();
//         if(compareArray[0].type === compareArray[1].type) {
//             match();
//         } else {
//             wrong();
//         }
//     }
// };


// cards.forEach (card => {
//     names.forEach (name => {
//         card.setAttribute("value", name);
//     })
// })


// let card = deck
// class card {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = 10;
//     }
// }


// let cards = [];
// const NUM_COLS = 5;
// const NUM_ROWS = 2;
// for (var i = 0; i< NUM_COLS; i++) {
//     for (var j = 0; j < NUM_ROWS; j++); {
//     const tileX = i * 10 + 5;
//     const tileY = j * 10 + 2;
//     cards.push(new tileX(tileX, tileY));
//     };
// };


// let myCard;
// button.addEventListener("click", displayCard);
// function displayCard() {
//     event.preventDefualt();
//     cards = card.value;
// }

    // compareArray[0].classList.add("wrong");
    // compareArray[1].classList.add("wrong");
    // disable();

    // let displayCard = function() {
    //     this.classList.toggle("open");
    //     this.classList.toggle("show");
    //     this.classList.toggle("disabled");
    // };
    // console.log(displayCard);

    
    // cards shuffled once refreshed //
// document.section.button = gameStart();
// function gameStart() {
//     compareArray = [];
//     deck = shuffle(deck);
//     for (let i = 0; i< deck.length; i++);
//     deck.innerHTML = "";
//     [].forEach.call(deck, function(item) {
//         deck.appendChild(item);
//     });
//     deck[i].classList.remove("show", "open", "match", "disabled");
//     console.log(gameStart);
// }

// cards shuffled //
// function shuffle(array) {
//     let currentIndex = array.length, temporaryValue, randomIndex;
//     while (currentIndex !== 0) {
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex -= 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;
//     } 
//     console.log(array);

//     return array;

// https://jsfiddle.net/james2doyle/qsQun/ = check for CSS