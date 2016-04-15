var pieces = {"K": "King", "Q": "Queen", "N":"Knight", "B":"Bishop", "R":"Rook", "P":"Pawn"},

	pieceCode = {"E": -1, "PW":0, "RW":1, "BW":2, "NW":3, "QW":4, "KW":5, "PB":6, "RB":7, "BB":8, "NB":9, "QB":10, "KB":11},

	piecesName = ["PW", "RW", "BW", "NW", "QW", "KW", "PB", "RB", "BB", "NB", "QB", "KB"];

var board = [],
	holder,
	container,
	turn,
	offset = 54, 
	rotated = false,

	wmove = 0, // white

	selectedPiece = null;

