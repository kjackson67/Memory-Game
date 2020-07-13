let card = document.querySelector("card");
let cards = [...card];
for (let i = 0; i < cards.length; i++) {
    cards(i).addEventListener("click", displayCard);
};

const displayCard = function () {
    this.classList.toggle("opent");
    this.classList.toggle("show");
    this.classList.toggle("disabled");
}