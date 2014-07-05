
var fade = function (node) {
	var level = 1;
	var step = function ( ) {
		var hex = level.toString(16);
		console.log('#FFFF' + hex + hex)
		node.style.backgroundColor = '#FFFF' + hex + hex;
		if (level < 15) {
			level++;
			setTimeout(step, 1000);
		}
	};

	setTimeout(step, 100);
};

fade(document.body);