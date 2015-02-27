/**  ---- BattleShip game ----
* Your mission is to destroy the enemy fleet! Play against the computer and try to sink all of its 
* battleships before it sinks all of yours. The first player to sink all of the opponent's ships wins.
*
*/

var mapArray = null;
var mapLong = 5;

// function to create a matrix 

var createMatrix = function (mapLong){
	mapArray = new Array(mapLong);
	for (var i = 0; i < mapLong; i++) {
		mapArray[i] = new Array(mapLong);
		for (var j = 0; j < mapLong; j++) {
			mapArray[i][j] = '(' + i + ',' + j + ')';
					
		}
	}
	return mapArray;
};

// Function to update a matrix
var updateMatrix = function(x,y){
	for (var i = 0; i <= x; i++) {
		for (var j = 0; j <= y; j++) {
			if (i==x && j==y){
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
	console.log("Please enter your coordinates for game");
	var x= window.prompt("Enter a coordinate X  (between 0 and "+ mapLong+':');
	while ( x <0 || x>= mapLong || haveLetter(x)){
		 x= window.prompt('Valor fuera de rango, usted debe ingresar un numero entre 0 '+mapLong+': ');
	}
	var y= window.prompt('Enter a coordinate Y  (between 0 and '+mapLong+'):');	
	while ( y <0 || y>= mapLong || haveLetter(y)){
		y = window.prompt('Valor fuera de rango, usted debe ingresar un numero entre 0 '+mapLong+':');
	}
	
	updateMatrix(y,x);
	
};

// function to validate only numbers, it returns true -> if there are chars
var haveLetter = function(text){
	
	if(!/^([0-9])*$/.test(text)){
		return true;
	}
	return false;
};

createMatrix(mapLong);
showMatrix();
getCoordinates();
showMatrix();
