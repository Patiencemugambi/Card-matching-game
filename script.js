//Tracking clicked cards
let card1 = null;
let card2 = null;




let totalPairs = 6;


//When a card is clicked
function clicked(card) {
   //card1
   if (card1 == null){
       card.className = "show";
       card1 = card;
   }
   else if(card2 == null){
       card.className = "show";
       card2 = card;
       setTimeout ("checkMatch();", 200);
   }


}


//Check for a Match
function checkMatch(){
   if(card1.src === card2.src){
       alert("Match!");


       //resetting cards
       card1 = null;
       card2 = null;


       moveCount++;
       updateMoveCount();


          //check if the hsve all matched
  if(moveCount === totalPairs){
   setTimeout(function() {
       alert("CONGRATULATIONS! Board Cleared!");
   }, 500);
 }
}
   else{
       //flip the cards after delay
       setTimeout(function() {
       card1.className = "hiding";
       card2.className = "hiding";


       //resetting cards
       card1 = null;
       card2 = null;
   }, 1000);
  }  
  moveCount++;
  updateMoveCount();
}
//Shuffling the Cards
function shuffleCards(){
   //select cards
   const cards = Array.from(document.querySelectorAll(".hiding"));
   const cardContainer = cards[0].parentNode // the parent container of cards
   //shuffle cards
   


   cards.forEach((card) => {
       const randomIndex = Math.floor(Math.random() * cards.Size);

       console.log("=============",randomIndex)
       const randomCard = cards[randomIndex];
       cardContainer.appendChild(randomCard)
   });
}
//call function shuffleCards when you refresh/open the page
window.onload = function () {
   shuffleCards();
}


//Display no of moves
let moveCount = 0;
//update the move count
function updateMoveCount(){
   const moveCountElement = document.getElementById("move-count");
   moveCountElement.textContent = moveCount;
}



