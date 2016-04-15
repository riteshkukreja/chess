window.onload = function() {
	holder = document.getElementsByClassName('pieces')[0];
	turn = document.getElementsByClassName('moves')[0];
	rotate = document.getElementsByClassName('rotate')[0];

	clearBoard();
	initBoard();
	drawBoxes();
	initHighlights();
	setBoard();
	drawBoard();
	showPlayer();
	rotateBoard();
}