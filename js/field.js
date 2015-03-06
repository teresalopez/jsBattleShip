// Field class
var Field = function(){
	// Constructor code
	this.size = 4; // Optional
	this.numShips = 3; // Optional
	this._field = [['0','0','0','0'], 
				['0','0','0','0'],
				['0','0','0','0'],
				['0','0','0','0']];
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
	
	this._drawShip = function(ship,pos){
		var initPos = parseInt(Math.random() * (this.size - ship.size));
		
		for (var i = initPos; i < (initPos + ship.size); i++) {
			this._field[pos][i] = ship.id;
		}
	};
	
	this._initShips = function() {
		for (var i = 1; i <= this.numShips; i++) {
			var ship = new Ship(i);
			this._ships[ship.id] = ship;
			this._drawShip(ship,i);
		}
	};
	
	/**
	* This function evaluate a shot given a position 
	* @param {int} xAxis, value for x axis
	* @param {int} yAxis, value for y axis
	*  
	*/
	this.evalShot = function(xAxis,yAxis) {
	
		var val = this._field[xAxis][yAxis]
		if (val != '0' && val != 'H' && val != 'F' ) {
			var ship = this._ships[val];
			ship.getShot();
			this._field[xAxis][yAxis] = 'H';
			console.log(ship.status);
		}
		else if ( val == 'H' || val == 'F'){			
			console.log('You already shot this position ');
		}
		else if ( val == '0' ){
			this._field[xAxis][yAxis] = 'F';
			console.log('FAIL');
		}
		this.drawn();
	};
	/**
	* Verify if any ship is still alive 
	* @return {boolean} True if one of them is still alive
	* and False if they are kill
	*/
	
	this.isAnyShipAlive = function() {
		for (var i = 1; i < this._ships.length; i++) {
			if (this._ships[i].status != 'KILL')
				return true;
		}
	};
	
	//this._initField();
	this._initShips();
	this.drawn();
};
