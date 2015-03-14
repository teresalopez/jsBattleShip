// Field class
var Field = function(){
	// Constructor code
	this.size = 10; // Optional
	this.numShips = 3; // Optional
	this._field = [];	
	this._emptyValue = '0';
	this._ships = [];
	
	// Definition of class method
	this._initField = function() {
		
		for (var i = 0; i < this.size; i++) {
			this._field[i] =new Array(this.size);
			for (var j = 0; j < this.size; j++){
				
				this._field[i][j] = '0';
				
			}
			
		}
	};
	
		
	this.drawn = function() {
		console.log('DEVELOPER:\n', this._field.join('\n'));
		console.log('PLAYER:\n', this._field.join('\n').replace(/[1-9]/g, '0'));
		/*
		console.log('Developer:\n');
		for (var i = 0; i < this._field.length; i++) {
			var msg = '';
			for (var j = 0; j < this._field[i].length; j++) {
				msg = msg + this._field[i][j] + ' ';
			}
			console.log(msg);
		}
	*/
		
	};
	
	this._drawShip = function(ship){
		var dir;
		var initPosX;
		var initPosY;
		do
		{
			dir = Math.floor(Math.random() * 2);
			if(dir == 0)
			{
				initPosX = parseInt(Math.random() * (this.size - ship.size));
				initPosY = parseInt(Math.random() * (this.size));
			}
			else
			{
				initPosX = parseInt(Math.random() * (this.size));
				initPosY = parseInt(Math.random() * (this.size - ship.size));	
			}
		}
		while(this._hasAvailableSpaces(dir, ship.size, initPosX, initPosY))
		
		this._deployShip(ship.id, dir, ship.size, initPosX, initPosY);
	};
	
	/**
	 * This review if a ship can be deployed in the map.
	 * @param {int} dir This is direction 0 = horizontal and 1 = vertical.
	 * @param {int} size This is size of the ship.
	 * @param {int} row This is the row.
	 * @param {int} row This is the column.
	 * @return {boolean} This returns true if all fields are available to deploy the
	 *    ship.
	 */
	this._hasAvailableSpaces = function(dir,size,row,col){
		if(this._field[row][col] == this._emptyValue)
		{
			for (var i = 0; i < size ; i++)
			{
				//if((row + i) > this._field.length - 1 || (row + i) > this._field.length - 1)
				//	return false;
				if(dir == 0)
				{
					if(this._field[row][col + i] != this._emptyValue)
						return false;
					continue;
				}
				else
				{
					if(this._field[row + i][col] != this._emptyValue)
						return false;
				}
			}
			return true;
		}
		return false;
	};
	
	/**
	 * This deploy a ship in the map.
	 * @param {int} id This is the identifier for the ship.
	 * @param {int} dir This is direction 0 = horizontal and 1 = vertical.
	 * @param {int} size This is size of the ship.
	 * @param {int} row This is the row.
	 * @param {int} row This is the column.
	 */
	this._deployShip = function(id, dir, size, row, col){
		for (var i = 0; i < size ; i++)
		{
			if(dir == 0)
			{
				this._field[row][col + i] = id;
				continue;
			}
			else
			{
				this._field[row + i][col] = id;
			}
		}
	};
	
	this._drawShip = function(ship){
		var dir;
		var initPosX;
		var initPosY;
		do
		{
			dir = Math.floor(Math.random() * 2);
			if(dir == 0)
			{
				initPosX = parseInt(Math.random() * (this.size));
				initPosY = parseInt(Math.random() * (this.size - ship.size));
			}
			else
			{
				initPosX = parseInt(Math.random() * (this.size - ship.size));	
				initPosY = parseInt(Math.random() * (this.size));
			}
		}
		while(!this._hasAvailableSpaces(dir, ship.size, initPosX, initPosY))
		
		this._deployShip(ship.id, dir, ship.size, initPosX, initPosY);
	};
	
	this._initShips = function() {
		for (var i = 1; i <= this.numShips; i++) {
			var ship = new Ship(i);
			this._ships[ship.id] = ship;
			this._drawShip(ship);
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
	
	this._initField();
	this._initShips();
	this.drawn();
};
