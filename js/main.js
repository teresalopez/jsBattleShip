/**  ---- BattleShip  ----
*Your mission is to destroy the enemy fleet! Play against the computer and try to sink all of its 
*battleships before it sinks all of yours. The first player to sink all of the opponent's ships wins.
*
*/
var mapArray = null;

// function to create a matrix 

var createMatrix = function (n){
	mapArray = new Array(n);
	for (var i = 0; i < n; i++) {
		mapArray[i] = new Array(n);
		for (var j = 0; j < n; j++) {
			mapArray[i][j] = '(' + i + ',' + j + ')';
					
		}
	}
	return mapArray;
};

// Function to update a matrix
var updateMatrix = function(x,y){
	for (var i = 0; i <= x; i++) {
		//mapArray[i] = new Array(n);
		for (var j = 0; j <= y; j++) {
			if (i==x & j==y){
				mapArray[i][j] = '(X,X)';
			}
					
		}
	}
	
	return mapArray;
	
};

// function to display matrix
var showMatrix = function (){
	if(mapArray != null) {
		for (var i = 0; i < mapArray.length; i++) {
			var msg = '';
			for (var j = 0; j < mapArray[i].length; j++) {
				msg = msg + mapArray[i][j] + ' ';
			}
			console.log(msg);
		}
	}
};

// function to get values from console
var getCoordinates = function(){
	console.log("Plese enter your coordinates for game");
	var x= window.prompt("Coordinate X:");
	var y= window.prompt("Coordinate Y:");
	updateMatrix(y,x);
	
};

createMatrix(5);
showMatrix();
getCoordinates();
showMatrix();
