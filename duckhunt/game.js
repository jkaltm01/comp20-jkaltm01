//game.js--simple javascript code for displaying background image with 2 ducks

function init() {
	var canvas = document.getElementById('game_canvas');
	var ctx = canvas.getContext("2d");

	var bg = new Image();
	bg.src = 'duckhunt-background.gif';
	var duck1 = new Image();
	duck1.src = 'duckhunt_various_sheet.png';
	var duck2 = new Image();
	duck2.src = 'duckhunt_various_sheet.png';

	bg.addEventListener("load", function() {
		ctx.drawImage(bg,0,0);

		duck1.addEventListener("load", function() {
			ctx.drawImage(duck1,40,115,40,30,80,70,40,30);
		});	

		duck2.addEventListener("load", function() {
			ctx.drawImage(duck2,120,115,40,30,120,50,40,30);
		});
	});
}
