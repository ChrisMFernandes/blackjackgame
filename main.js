console.log('linked');

var deal = document.getElementById('deal');
var hit = document.getElementById('hit');
var call = document.getElementById('call');
var img = document.createElement('img');

deal.addEventListener('click', dealCards);
hit.addEventListener('click', hit);
call.addEventListener('click', stay);

// Build Deck and shuffle

function Card(suit, rank, value){
	this.suit = suit;
	this.rank = rank;
	this.value = value;
};

	// suits, values, deck
	var suits = ['Spades', 'Hearts', 'Diamonds', 'Clubs'];
	var values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
	
	var deck = new Array();

		function createDeck(){
			deck = new Array();
			for (var i = 0; i < values.length; i++){
				for (var x = 0; x < suits.length; x++){
					var number = parseInt(values[i]);
						if (values[i] == 'J' || values[i] == 'Q' || values[i] == 'K'){
							deck.push(new Card(suits[x], 10));
						}else if (values[i] == 'A'){
							deck.push(new Card(suits[x], 1));
						}else{
							deck.push(new Card(suits[x], values[i]));
					}
				}
			_.shuffle(deck);
		};


// Create Players

	var players = new Array();
		function createPlayers(num){
			players = new Array();
			for(var i = 1; i <= num; i++){
		
			var hand = new Array();
			var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand };
			players.push(player);
		}
	};


/* Bets Function
	
	function setCash()
	function bet()
	add monetary value plus functionality that adds to pot if hand won
	player wallet will need to decrease if hand is lost
	player will not be able to continue to play if wallet = 0
*/

// Deal Function
	
	function dealCards(){
		for (var i = 0; i < 2; i++){
			for (var x = 0; x < players.length; x++){
				var card = deck.pop();
				players[x].Hand.push(card);
			}
		}
	};
	 
// deal two players two cards each
// how do I deal two random cards to each player?


/* Render Cards

	image for front and back of 52 cards
*/

/* Hit Function
	
	function hit(){
		var card 1 = dealCards();
		var card 2 = dealCards();
	  }
	 adds one card to player hand plus adds value of card dealt
*/

/* Stay/Call Function

	function stay(){
		if (currentPlayer != players.length-1)
	}
	should trigger game function
	how will dealer know to hit until bust or win?
	dealer always stay when dealt 17
*/
/* Reset Function
	reset hand after each turn
	hands will need to clear and reshuffle each round
*/