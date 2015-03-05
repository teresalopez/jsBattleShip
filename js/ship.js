// Ship class
var Ship = function(id){
	this.id = id;
	this.size = 3;
	this.status = 'ALIVE';
	this.numShots = 0;
	
	this.getShot = function(){
		this.numShots++;
		this.status = 'HIT';
		if (this.numShots == this.size)
			this.status = 'KILL';
	};
};