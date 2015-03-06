/**
 * Ship class
 *     
 */
var Ship = function(id){
	this.id = id;
	this.size = 2;
	this.status = 'ALIVE';
	this.numShots = 0;
	
	/**
	* Evaluate if  ship was hit or kill and update number of shots 
	*/
	this.getShot = function(){
		this.numShots++;
		this.status = 'HIT';
		if (this.numShots == this.size)
			this.status = 'KILL';
	};
};