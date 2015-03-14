// Player class
var Player = function(){
	this.field = new Field();
	// this.name = window.prompt('Your name?');
	this.name = 'Leo';
	
	this.isLooser = function() {
		return this.field.isAnyShipAlive();
	};
};