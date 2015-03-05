// Field class
var Field = function(){
	// Constructor code
	this.size = 8; // Optional
	this.numShips = 1; // Optional
	this._field = [];
	this._ships = [];
	
	// Defintion of class method
	this._initField = function() {
		for (var i = 0; i < this.size; i++) {
			this._field[i] = '0';
		}
	};
	this.drawn = function() {
		console.log('TEST: ', this._field.join('-'));
		console.log('PLAYER: ', this._field.join('-').replace(/1/g, '0'));
	};
	
	this._drawShip = function(ship){
		var initPos = parseInt(Math.random() * (this.size - ship.size));
		
		for (var i = initPos; i < (initPos + ship.size); i++) {
			this._field[i] = ship.id;
		}
	};
	
	this._initShips = function() {
		for (var i = 1; i <= this.numShips; i++) {
			var ship = new Ship(i);
			this._ships[ship.id] = ship;
			this._drawShip(ship);
		}
	};
	
	
	this.evalShot = function(pos) {
	
		var val = this._field[pos];
		if (val != '0') {
			var ship = this._ships[val];
			ship.getShot();
			this._field[pos] = 'H';
			console.log(ship.status);
		}
		else {
			this._field[pos] = 'F';
			console.log('FAIL');
		}
		this.drawn();
	};
	
	this.isAnyShipAlive = function() {
		for (var i = 1; i < this._ships.length; i++) {
			if (this._ships[i].status != 'KILL')
				return true;
		}
	};
	
	this._initField();
	this._initShips();
	this.drawn();
};
