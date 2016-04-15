var removeHighlights = function() {
	
	container.innerHTML = "";
}

var initHighlights = function() {

	container = document.getElementsByClassName('highlights')[0];
}

var highlightMoves = function(moves) {
	removeHighlights();
	for(i = 0 ; i < moves.length; i++) {
		// highlight boxes
		drawHighlight(moves[i]['x'], moves[i]['y']);
	}
}

var drawHighlight = function(posX, posY) {
	var piece = document.createElement("span");
	piece.className = "highlight";
	piece = setBlock(piece, posX, posY);
	piece.addEventListener('click', function(e) {
		if(selectedPiece != null && validMove(selectedPiece['piece'], selectedPiece['x'], selectedPiece['y'], posX, posY)) {
			console.log(selectedPiece['x'], selectedPiece['y'], posX, posY);
			movePiece(selectedPiece['x'], selectedPiece['y'], posX, posY);
			removeHighlights();
		}
	});
	container.appendChild(piece);
}

var setBlock = function(piece, posX, posY) {
	piece.style.top = (offset*posX) + "px";
	piece.style.left = (offset*posY) + "px";
	return piece;
}