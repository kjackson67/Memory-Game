// console.log("running");
const cards = document.querySelectorAll(".card");
const deck = document.querySelector("#deck");
const button = document.querySelector(".game-reset");
const names = ["Walter Peyton", "Gale Sayers", "Mike Ditka", "Dick Butkus", "Gary Fencik", "Walter Peyton", "Gale Sayers", "Mike Ditka", "Dick Butkus", "Gary Fencik"];
let counter = 0;
let compareArray = []

for (let i = 0; i <names.length; i++) {
    cards[i].setAttribute("value", names[i]);
    
}
cards.forEach(card => {
    card.addEventListener("click",() => {
        if (counter < 2) {
            let value = card.getAttribute("value");
                console.log(value);
            counter ++;
            card.innerText = value;
            compareArray.push(value);
            if (counter >= 2) {
                checkMatch();
                console.log(compareArray);
            }
        }
    })
})

function checkMatch () {
    if (compareArray[0] === compareArray[1]) {
        console.log("match");
    } else {
        console.log("wrong");
    }
}



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

// card.prototype.draw = function() {
// }


// let myCard;
// button.addEventListener("click", displayCard);
// function displayCard() {
//     event.preventDefualt();
//     cards = card.value;
// }



    




