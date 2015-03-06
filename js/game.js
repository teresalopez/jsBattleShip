// Game class
var Game = function(){
	this.numsPlayers = null;
	this.players = [];
	
	
	this.play = function() {
	
		var player = this.players[0];
		do {
			var limit = player.field.size - 1;
			// var shot = new Shot(window.prompt('Shot? [0 - ' + limit + ']'));
			var shotX = Number(window.prompt('Shot axis X value? [0 - ' + limit + ']'));
			var shotY = Number(window.prompt('Shot axis Y value? [0 - ' + limit + ']'));
			
			player.field.evalShot(shotX,shotY);
			
		} while(player.isLooser());
		
	};
	
	this.start = function(numsPlayers){
		this.numsPlayers = numsPlayers;
		for (var i = 0 ; i < numsPlayers; i++) {
			this.players.push(new Player());
		}
		this.play();
	}

};