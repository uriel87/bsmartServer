


function Card (id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
}


Card.prototype.getId = function () {
    return this.id
}

Card.prototype.getName = function () {
    return this.name
}

Card.prototype.getImg = function () {
    return this.img
}


Card.prototype.hideCard = function () {

}


Card.prototype.showCard = function () {

}


module.exports = function (id, name, img) {
    var card = new Card(id, name, img);
    return card;
};


//module.exports = Card;

// var d = new Card("qqq","www","eee");
// var e = new Card("eeeeeeee","www","eee");
//
// console.log("d.getId() - " + d.getId());
// console.log("e.getId() - " + e.getId());

