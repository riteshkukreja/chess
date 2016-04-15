var pawnMove = function(player, i, j, x, y) {
	if(player == 'W') {
		if((x - i == 1 && y == j && board[x][y] == -1) || (x - i == 1 && Math.abs(y - j) == 1 && board[x][y] >= 0) || (i == 1 && x - i == 2 && y == j && board[x][y] == -1)) return true;
	} else {
		if((x - i == -1 && y == j && board[x][y] == -1) || (x - i == -1 && Math.abs(y - j) == 1 && board[x][y] >= 0) || (i == 6 && x - i == -2 && y == j && board[x][y] == -1)) return true;
	}
	return false;
}

var kingMove = function(i, j, x, y) {
	if(Math.abs(x - i)  <= 1 && Math.abs(y - j) <= 1) return true;
	return false;
}

var bishopMove = function(i, j, x, y) {
	if(Math.abs(x-i) == Math.abs(y-j)) return true;
	return false;
}

var knightMove = function(i, j, x, y) {
	if((Math.abs(x - i) == 1 && Math.abs(y - j) == 2) || (Math.abs(x - i) == 2  && Math.abs(y - j) == 1)) return true;
	return false;
}

var rookMove = function(i, j, x, y) {
	if((Math.abs(x - i) == 0 && Math.abs(y - j) > 0) || (Math.abs(x - i) > 0 && Math.abs(y - j) == 0)) return true;
	return false;
}

var queenMove = function(i, j, x, y) {
	if(bishopMove(i, j, x, y) || rookMove(i, j, x, y)) return true;
	return false;
}

var validMove = function(piece, old_x, old_y, new_x, new_y) {
	switch(piece[0]) {
		case 'K': return kingMove(old_x, old_y, new_x, new_y);
		case 'Q': return queenMove(old_x, old_y, new_x, new_y);
		case 'N': return knightMove(old_x, old_y, new_x, new_y);
		case 'R': return rookMove(old_x, old_y, new_x, new_y);
		case 'B': return bishopMove(old_x, old_y, new_x, new_y);
		default: return pawnMove(piece[1], old_x, old_y, new_x, new_y);
	}
	return false;
}

var findValidMoves = function(piece, x, y) {
	if(player() != piece[1]) return;
	var moves = [], block = 0;
	for(i = 0, k = 0 ; i < 8 ; i++) {
		for(j = 0 ; j < 8; j++) {
			if(validMove(piece, x, y, i, j) && (board[i][j] == -1 || !isSameTeam(x, y, i, j))) {
				moves[k++] = {'x': i, 'y': j};
			}
		}
	}
	highlightMoves(moves);
}

var movePiece = function(oldX, oldY, newX, newY) {
	var piece = board[oldX][oldY], kill = false;
	if(board[newX][newY] == pieceCode['E']) {
		// new pos is empty
		board[newX][newY] = piece;
	} else {
		// kill the piece at new pos
		kill = true;
		board[newX][newY] = piece;
	}
	
	checkPromotion(piece, newX, newY);

	board[oldX][oldY] = pieceCode['E'];
	clearBoard();
	drawBoard();

	moveList(pgnEncoder(piece, oldY, oldX, newY, newX, kill)); // write to move list
	
	wmove = !wmove;
	showPlayer();
}

var player = function() {
	if(wmove) return 'B';
	return 'W';
}

var showPlayer = function() {
	switch(player()) {
		case 'W': turn.innerHTML = "WHITE";
					break;
		case 'B': turn.innerHTML = "BLACK";
					break;
	}
}






