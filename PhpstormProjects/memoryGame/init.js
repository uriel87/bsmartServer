


// var cards = require('./Cards');
// var cardsList = require('./CardsList');
//
// var cardsListttt = new cardsList(cards);
// console.log("cardsListttt - " + cardsListttt.string);
//
// // for(var i = 0; i < cardsListttt.length; i++) {
// //         console.log("cardsList - " + cardsListttt[i].name);
// // }




var memory = {



    showCardInHtml: function (cards) {

            // firstPick: null;
            // secondPick: null;

            var checkMatch = function (firstPick, secondPick) {
                    // noMatchsFirstCard = null;
                    // noMatchsSecondtCard = null;
                    console.log("in checkMatch");
                    if (firstPick == secondPick) {
                            //noMatchCards = document.getElementsByName(firstPick);

                            // noMatchCards[0].classList.add("animation");
                            // noMatchCards[1].classList.add("animation");
                    }
                    else {
                            noMatchsFirstCard = document.getElementsByName(firstPick);
                            for (var t = 0; t < 2; t++) {
                                    if (noMatchsFirstCard[t].classList.contains("animation")) {
                                            noMatchsFirstCard[t].classList.add("hideCard");
                                            noMatchsFirstCard[t].style.backgroundImage = "url(images/frontCard.jpg)"
                                    }
                            }

                            noMatchsSecondtCard = document.getElementsByName(secondPick);
                            for (var t = 0; t < 2; t++) {
                                    if (noMatchsSecondtCard[t].classList.contains("animation")) {
                                            noMatchsSecondtCard[t].classList.add("hideCard");
                                            noMatchsSecondtCard[t].style.backgroundImage = "url(images/frontCard.jpg)"
                                    }
                            }

                            // noMatchsFirstCard = null;
                            // noMatchsSecondtCard = null;
                            // firstPick = null;
                            // secondPick = null;
                            // return;
                    }
            };

            var cardsSec = document.getElementById("cardsSec");
            cards.forEach(function (v, i) {
                    var tempCardDiv = null;
                    tempCardDiv = document.createElement('div');
                    tempCardDiv.id = cards[i].id;
                    tempCardDiv.setAttribute("name", cards[i].name)
                    tempCardDiv.className = 'card';
                    tempCardDiv.addEventListener('click', function () {
                            tempCardDiv.style.backgroundImage = "url('" + cards[i].img + "')";
                            tempCardDiv.classList.add('animation');
                            if (firstPick === undefined || firstPick === null) {
                                    firstPick = cards[i].name;
                                    console.log("firstPick - " + firstPick);
                            } else {
                                    secondPick = cards[i].name;
                                    console.log("secondPick - " + secondPick);
                                    checkMatch(firstPick, secondPick);
                                    //setTimeout(function(){checkMatch(firstPick,secondPick)}, 1500);
                                    firstPick = null;
                                    secondPick = null;
                            }
                    });
                    cardsSec.appendChild(tempCardDiv);
            });


            // var sort = function (cards) {

    },
        sort : function (cards) {
                var newcards = cards.concat(cards);
                var cardsLength = newcards.length, temp, i, pos;
                for (i = cardsLength-1; i > 0; i--) {
                        pos = Math.floor(Math.random() * i);
                        temp = newcards[pos];
                        newcards[pos] = newcards[i];
                        newcards[i] = temp;
                }
                return newcards;
        }
};



var newCards = memory.sort(cards);
console.log(newCards);

memory.showCardInHtml(memory.sort(cards));


