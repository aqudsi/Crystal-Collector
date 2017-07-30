//creates and array with numbers between 19 and 120
var randomNumber = [];
for(i=19; i<=120;i++)
{
randomNumber.push(i);
}

//variable for the number the player must match
var gameScore = 0

//starting score for the player
var playerScore = 0;

//variables for each crystal
var diamond = 0;
var ruby = 0;
var emerald = 0;
var sapphire = 0;

//counters to keep track of wins and losses
var wins = 0;
var losses = 0;

//chooses a random number from the array randomNumber and stores it in gameScore
function g_score()
{
	gameScore = randomNumber[Math.floor(Math.random()*randomNumber.length)];
}

//function that generates a random value for each crystal
function crystalValue()
{
	diamond = Math.floor(Math.random() *11 + 1);
	ruby = Math.floor(Math.random() *11 + 1);
	emerald = Math.floor(Math.random() *11 + 1);
	sapphire = Math.floor(Math.random() *11 + 1);
}

//reset function when player wins or loses	
function reset()
{
	diamond = 0;
	ruby = 0;
	emerald = 0;
	sapphire = 0;
	playerScore = 0;
}
//updates wins, losses, player score, and game score
function update()
{
	$('#wins').text("Wins: " + wins);
	$('#losses').text("Losses: " + losses);
	$('#player-score').text("Your score: " + playerScore);
	$('#game-score').text("Game score: " + gameScore);
}

//sets initial values for the crystals, game score, and other stats
g_score();
crystalValue();
update();

//adds to user score when the diamond is clicked on
$("#diamond").on("click", function() 
{
	playerScore+=diamond;
	update();
//if the player wins, adds 1 to win counter and resets stats
if(playerScore === gameScore)
{
	wins++;
	reset();
	g_score();
	update();
	crystalValue();
}	
//if the player loses, adds 1 to loss counter and resets stats
else if(playerScore > gameScore)
{
	losses++;
	reset();
	g_score();
	update();
	crystalValue();
}
});	

//adds to user score when the ruby is clicked on
$("#ruby").on("click", function() 
{
	playerScore+=ruby;	
	update();
//if the player wins, adds 1 to win counter and resets stats
if(playerScore === gameScore)
{
	wins++;
	reset();
	g_score();
	update();
	crystalValue();
}
//if the player loses, adds 1 to loss counter and resets stats
else if(playerScore > gameScore)
{
	losses++;
	reset();
	g_score();
	update();
	crystalValue();

}
});	

//adds to user score when the emerald is clicked on
$("#emerald").on("click", function() 
{
	playerScore+=emerald;
	update();
//if the player wins, adds 1 to win counter and resets stats
if(playerScore === gameScore)
{
	wins++;
	reset();
	g_score();
	update();
	crystalValue();
}
//if the player loses, adds 1 to loss counter and resets stats
else if(playerScore > gameScore)
{
	losses++;
	reset();
	g_score();
	update();
	crystalValue();
}
});	

//adds to user score when the sapphire is clicked on
$("#sapphire").on("click", function() 
{
	playerScore+=sapphire;
	update();
//if the player wins, adds 1 to win counter and resets stats	
if(playerScore === gameScore)
{
	wins++;
	reset();
	g_score();
	update();
	crystalValue();
}
//if the player loses, adds 1 to loss counter and resets stats
else if(playerScore > gameScore)
{
	losses++;
	reset();
	g_score();
	update();
	crystalValue();
}
});	







