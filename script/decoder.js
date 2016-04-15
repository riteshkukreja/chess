
var pgnDecoder = function(pgn) {
	if(pgn[0] == 'K' || pgn[0] == 'Q' || pgn[0] == 'B' || pgn[0] == 'R' || pgn[0] == 'N') {
		// for Kxe5
		if(pgn[1] == 'x' || pgn[1] == 'X') {
			x = pgn[2].charCodeAt(0) - 'a'.charCodeAt(0);
			y = pgn[3]-1;
		} else {
			// for Ke5
			x = pgn[1].charCodeAt(0) - 'a'.charCodeAt(0);
			y = pgn[2]-1;
		}
		pos = getPositionOf(pgn[0] + player(), x, y);
		if(pos['x'] != null && pos['y'] != null)
			movePiece(pos['x'], pos['y'], x, y);
		else
			console.log('Invalid Move');

	} else {
		if(pgn[1] == 'x' || pgn[1] == 'X') {
			// for exd6
			old_x = pgn[0].charCodeAt(0) - 'a'.charCodeAt(0);
			x = pgn[2]-'a';
			y = pgn[3]-1;
			movePiece(old_x, y-1, x, y);
		} else {
			// for e5
			x = pgn[0].charCodeAt(0) - 'a'.charCodeAt(0);
			y = pgn[1]-1;
			console.log(x, y);
			movePiece(x-1, y, x, y);
		}
	}
}

var pgnEncoder = function(piece, i, j, x, y, kill) {
	var str = "";
	if(piece != -1) {
		var name = piecesName[piece][0];
		if(name != "P") str = name;
		if(kill) {
			if(name == 'P') str = String.fromCharCode(97 + i);
			str+= "x";
		}
		str += String.fromCharCode(97 + x);
		str += y;
	}
	return str;
}