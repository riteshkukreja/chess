var createMove = function(c, move) {
	var span = document.createElement('span');
	span.className = "move " + c;
	span.innerHTML = move;
	return span;
}

var moveList = function(pgnmove) {
	var list = document.getElementsByClassName('move_list')[0];
	list.appendChild(createMove(player(), pgnmove));
}