var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["creeper","diamond","dirt"];
var emptyStr = "";
var emptyArr = [];

function startGame(){
	var random = Math.floor(Math.random() * (3-0) + 0);
	console.log(random);
	console.log(words[random]);
	var wordtoguess = words[random];
	document.getElementById('letters-container').innerHTML = letters;
	// document.getElementById('word-container').innerHTML = wordtoguess;
	for (var i = 0; i < wordtoguess.length; i++) {
		document.getElementById('word-container').innerHTML += "-";
	};
	document.getElementsByTagName('body').addEventListener('keydown',createLetters);
}
startGame();


function createLetters(e) {
	console.log(createLetters(e));
	var index = 0;
}