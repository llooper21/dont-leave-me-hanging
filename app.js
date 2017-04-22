document.body.addEventListener('keydown',createLetters);
// var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var words = ["creeper","diamond","dirt"];
var emptyStr = "";
var emptyArr = [];
var random = Math.floor(Math.random() * (3-0) + 0);
var letters = [];

function startGame(){
	console.log(random);
	console.log(words[random]);
	var wordtoguess = words[random];
	//document.getElementById('letters-container').innerHTML = letters;
	// document.getElementById('word-container').innerHTML = wordtoguess;
	for (var i = 0; i < wordtoguess.length; i++) {
		document.getElementById('word-container').innerHTML += "-";
	};
	// if (wordtoguess = "dirt") {
	// 	document.getElementById('picture').style.backgroundImage = "url('assets/Dirt.png')";
	// }else if (wordtoguess = "diamond") {
	// 	document.getElementById('picture').style.backgroundImage = "url('assets/Diamond.png')";
	// }else if (wordtoguess = "creeper") {
	// 	document.getElementById('picture').style.backgroundImage = "url('assets/Creeper.png')";
	// }
	document.body.addEventListener('keydown',createLetters);
}
startGame();


function createLetters(e) {
	console.log(e.key);
	// var index = 0;
	var wordtoguess = words[random];
	document.getElementById('word-container').innerHTML = "";
	for (var x = 0; x < wordtoguess.length; x++) {
		if (wordtoguess[x] == e.key) {
			changeInnerHTML[x] = e.key;
			document.getElementById('word-container').innerHTML = changeInnerHTML;
			// document.getElementById('word-container').innerHTML += e.key;
			// document.getElementById(e.key).style.backgroundColor = "black";
			// letters.push(e.key);
			// console.log(letters);
		} 
		// else {
		// 	document.getElementById('word-container').innerHTML += "-";
		// }
	}
}
