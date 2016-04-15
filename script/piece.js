var drawPiece = function(container, code, posX, posY) {
	var piece = document.createElement("span");
	piece.className = "piece " + getPiece(code);
	piece = setPosition(piece, posX, posY);

	piece.addEventListener('click', function(e) {
		findValidMoves(piecesName[code], posX, posY);
		selectedPiece = {'x': posX, 'y': posY, 'piece': piecesName[code]};
	});
	container.appendChild(piece);
}

var removePiece = function(x, y) {

}

var getPiece = function(code) {
	var name = piecesName[code];
	var response = pieces[name[0]] + " " + name[1];
	return response;
}

var isSameTeam = function(i, j, x, y) {
	var code_new = board[x][y], code_old = board[i][j];
	player_new = piecesName[code_new], player_old = piecesName[code_old];
	if(player_new == undefined || player_old == undefined) return false;
	//console.log(player_code, code, i, j);
	return (player_new[1] == player_old[1]);
}

var setPosition = function(piece, posX, posY) {
	piece.style.top = (offset*posX + 5) + "px";
	piece.style.left = (offset*posY + 5) + "px";
	return piece;
}

var getPositionOf = function(p, x, y) {
	for(i = 0 ; i < 8; i++) {
		for(j = 0 ; j < 8 ; j++) {
			if(board[i][j] == pieceCode[p] && validMove(p, i, j, x, y))
				return {'x': i, 'y': j};
		}
	}
	return {'x': null, 'y': null};
}

var checkPromotion = function(code, x, y) {
	if(((player() == 'W' && x == 7) || (player() == 'B' && x == 0)) && code == pieceCode['P' + player()]) promoteTo(pieceCode['Q'+player()], x, y);
}

var promoteTo = function(piece, x, y) {
	console.log(holder, piece, x, y);
	drawPiece(holder, piece, x, y);
}