window.onload = function() {
  var deck = createDeck();
  showDeck(deck);
}

var createDeck = function() {
// based on code from http://www.brainjar.com/js/cards/default2.asp
  var ranks = ["A", "2", "3", "4", "5", "6", "J", "Q", "K"];
  var suits = ["♣", "♦", "♥", "♠"];
  var j, k, index=0;
  var pack_size;

  // Set array of cards.
  // total number of cards
  pack_size = ranks.length * suits.length;
  var cards = [];
  

  // Fill the array with 'n' packs of cards.
  while (index < pack_size){
    for (j = 0; j < suits.length; j++){
       for (k = 0; k < ranks.length; k++){
          console.log("k:",k,"index:",index);
          cards[index] = {rank:ranks[k], suite:suits[j]};
          index++;
          }
       }
    }
  console.log(cards.length);
  return cards;
}
var showCards = function(cardJSON) {
txt = cardJSON.rank + cardJSON.suite;    
card = document.createElement("div");
back = document.createElement("div");
card.textContent = txt;
card.className = "card";
back.className = "back";
console.log(card);
console.log(back);
document.querySelector(".stack").appendChild(card);
document.querySelector(".stack").appendChild(back);
}


var showDeck = function(deck){
    var idx;
    for (idx = 0; idx < deck.length; ++idx) {
            console.log("so far, so good",deck[idx]);
            showCards(deck[idx]);
    }
}

document.getElementsByClassName(".back").onclick = function() {
     if(document.querySelector(".back").className == "back"){
        document.querySelector(".back").className += "flipped";
    }
    else{
        document.querySelector(".back").className = "back";
    }
}
//var flipper = function() {
 // var stack = getElementsByClassName('stack');
  
 // document.getElementsByClassName('back').onclick = function() {
 //   stack.toggleClassName('flipped');
 // }
//}

//--------------------
//$('.sideBox').click(function(){
    //    $(this).find('.stack').addClass('flipped').mouseleave(function(){
     //       $(this).removeClass('flipped');
    //    });
    //    return true;
  //  });

