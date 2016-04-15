var initBoard = function() {
	for(i = 0 ; i < 8; i++) {
		board[i] = new Array(8);
		for(j = 0 ; j < 8; j++) {
			board[i][j] = pieceCode['E'];
		}
	}
}

var drawBoxes = function() {
	var board = document.getElementsByClassName('board')[0];
	var html = "";
	for(i = 0 ; i < 8; i++) {
		for(j = 0 ; j < 8 ; j++)  {
			if((i+j) % 2) {
				html += drawBox(0);
			} else {
				html += drawBox(1);
			}
			html += '\n';
		}
		html += '\n';
	}
	board.innerHTML = html;
}

var drawBox = function(alt) {
	if(alt) {
		// black box
		return "<span class='black'></span>";
	} else {
		// white box
		return "<span class='white'></span>";
	}
}

var rotateBoard = function() {
	rotate.addEventListener('click', function() {
		var board = document.getElementsByClassName('set')[0];
		if(!rotated) {
			board.style.transform = "rotateZ(-180deg)";
			rotated = true;
		} else {
			board.style.transform = "rotateZ(0deg)";
			rotated = false;
		}
	});
}

var setBoard = function() {
	// set pawns
	for(j = 0; j < 8; j++) board[1][j] = pieceCode['PW'];
	for(j = 0; j < 8; j++) board[6][j] = pieceCode['PB'];

	// set white pieces
	board[0][0] = pieceCode['RW'];
	board[0][1] = pieceCode['NW'];
	board[0][2] = pieceCode['BW'];
	board[0][3] = pieceCode['QW'];
	board[0][4] = pieceCode['KW'];
	board[0][5] = pieceCode['BW'];
	board[0][6] = pieceCode['NW'];
	board[0][7] = pieceCode['RW'];


	// set black pieces
	board[7][0] = pieceCode['RB'];
	board[7][1] = pieceCode['NB'];
	board[7][2] = pieceCode['BB'];
	board[7][3] = pieceCode['QB'];
	board[7][4] = pieceCode['KB'];
	board[7][5] = pieceCode['BB'];
	board[7][6] = pieceCode['NB'];
	board[7][7] = pieceCode['RB'];
}

var drawBoard = function() {
	for(i = 0 ; i < 8; i++) {
		for(j = 0 ; j < 8 ; j++) {
			if(board[i][j] != -1) {
				drawPiece(holder, board[i][j], i, j);
			}
		}
	}
}

var clearBoard = function() {
	while (holder.firstChild) {
	    holder.removeChild(holder.firstChild);
	}
}

