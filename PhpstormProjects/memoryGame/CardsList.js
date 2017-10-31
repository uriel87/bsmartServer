

var card = require('./card');
var cards = require('./Cards');
console.log("inCardList hello");


function CardsList (cards) {
    this.cardList = [];
    this.insertCards(cards);
}


CardsList.prototype.insertCards = function (cards) {
    var tempCard = null;
    var cardlength =  cards.length
    for(var i = 0; i < cardlength; i++) {
        this.cardList.push(new card(cards[i].id, cards[i].name, cards[i].img));
    }
    // for(var i = 0; i < cardlength; i++) {
    //     console.log("insertCards - " + this.cardList[i].name);
    // }
}


CardsList.prototype.duplicateCards = function (cards) {
    this.cardList = cards.concat(cards);
    return this.cardList;
};


CardsList.prototype.shuffle = function () {
    var cardsLength = this.cardList.length, temp, i, pos;
    for (i = cardsLength-1; i > 0; i--) {
        pos = Math.floor(Math.random() * i);
        temp = this.cardList[pos];
        this.cardList[pos] = this.cardList[i];
        this.cardList[i] = temp;
    }
    return this.cardList;
}


module.exports = function(cards) {
    var newCardList = new CardsList(cards);
    for(var i = 0; i < newCardList.length; i++) {
        console.log("insertCards exports - " + newCardList[i].name);
    }
    return newCardList.cardList;
}


var d = new CardsList(cards);
