// Game class
var Game = function(){
	this.numsPlayers = null;
	this.players = [];
	
	
	var validateCoord = function(cor,lim){
		//console.log("Please enter your coordinates for game");
		//var x= window.prompt("Enter a coordinate X  (between 0 and "+ mapLong+':');
		var cord = cor ;
		while ( cord <0 || cord>= lim || haveLetter(cord)){
			cord= window.prompt('Valor fuera de rango, usted debe ingresar un numero entre 0 '+lim+': ');
		}
		
		return cord;
	
	};

// function to validate only numbers, it returns true -> if there are chars
    var haveLetter = function(text){
	
	  if(!/^([0-9])*$/.test(text)){
		return true;
	}
	return false;
};

	
	this.play = function() {
	
		var player = this.players[0];
		do {
			var limit = player.field.size - 1;
			// var shot = new Shot(window.prompt('Shot? [0 - ' + limit + ']'));
			var shotX = validateCoord(Number(window.prompt('Shot axis X value? [0 - ' + limit + ']')), limit);
			var shotY = validateCoord(Number(window.prompt('Shot axis Y value? [0 - ' + limit + ']')),limit);
			
			player.field.evalShot(shotX,shotY);
			
		} while(player.isLooser());
		
	};
	
	this.start = function(numsPlayers){
		this.numsPlayers = numsPlayers;
		for (var i = 0 ; i < numsPlayers; i++) {
			this.players.push(new Player());
		}
		this.play();
	};

};