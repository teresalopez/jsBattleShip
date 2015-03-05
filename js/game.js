// Game class
var Game = function(){
	this.numsPlayers = null;
	this.players = [];
	
	
	this.play = function() {
	
		var player = this.players[0];
		do {
			var limit = player.field.size - 1;
			// var shot = new Shot(window.prompt('Shot? [0 - ' + limit + ']'));
			var shot = Number(window.prompt('Shot? [0 - ' + limit + ']'));
			
			player.field.evalShot(shot);
			
		//} while(this.players[0].status == 'LOOSER');
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