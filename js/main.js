/**  ---- BattleShip game ----
* Your mission is to destroy the enemy fleet! Play against the computer and try to sink all of its 
* battleships before it sinks all of yours. The first player to sink all of the opponent's ships wins.
*
*/

/* Map array example
 mapArray = [[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0],
					[0,0,0,0,0,0,0]]; */
					
var mapArray = null;
var emptyValue = 0;
var mapLong = 5;
var shipList = [];

// function to create a matrix 

var createMatrix = function (size){
	var mapArray1 = new Array(size);
	for (var i = 0; i < size; i++) {
		mapArray1[i] = new Array(size);
		for (var j = 0; j < size; j++) {
			//mapArray1[i][j] = '(' + i + ',' + j + ')';
			mapArray1[i][j] = 0;
					
		}
	}
	return mapArray1;
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
var showMatrix = function (array){
	if(array != null) {
		for (var i = 0; i < array.length; i++) {
			var msg = '';
			for (var j = 0; j < array[i].length; j++) {
				msg = msg + array[i][j] + ' ';
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



/**
 * Load ships into the map and list of ships.
 * Number of ships created is according to long of the map 
 */
function loadShips()
{
    for (var i = 0; i <  Math.floor(mapArray.length / 2); i++) {
        shipList.push(createShip());
    };
}

/**
 * Create a ship according to random position(x,y), random size and random
 *     direction.
 * @return {array} This returns an array with the ship identifier and the ship
 *    size.
 */
function createShip()
{
    var dir = Math.floor(Math.random() * 2);
    var size = Math.floor((Math.random() * 3) + 2);
    var id = Math.floor((Math.random() * 1000) + 1);
    var randomRow;
    var randomCol;
    var itIsAvailable = false; 
    while(itIsAvailable == false)
    {
        randomRow = Math.floor(Math.random() * mapArray.length);
        randomCol = Math.floor(Math.random() * mapArray.length);
        itIsAvailable = hasAvailableSpaces(dir,size,randomRow,randomCol);
    }
    deployShip(id,dir,size,randomRow,randomCol)
    return [id,size];
}

/**
 * This reivew if a ship can be deployed in the map.
 * @param {int} dir This is direction 0 = horizontal and 1 = vertical.
 * @param {int} size This is size of the ship.
 * @param {int} row This is the row.
 * @param {int} row This is the column.
 * @return {boolean} This returns true if all fields are available to deploy the
 *    ship.
 */
function hasAvailableSpaces(dir,size,row,col)
{
    if(mapArray[row][col] == emptyValue)
    {
        for (var i = 1; i <= size; i++)
        {
            if((row + i) > mapArray.length - 1 || (row + i) > mapArray.length - 1)
                return false;
            if(dir == 0)
            {
                if(mapArray[row][col + i] != emptyValue)
                    return false;
                continue;
            }
            else
            {
                if(mapArray[row + i][col] != emptyValue)
                    return false;
            }
        }
        return true;
    }
    return false;
}

/**
 * This deploy a ship in the map.
 * @param {int} id This is the identifier for the ship.
 * @param {int} dir This is direction 0 = horizontal and 1 = vertical.
 * @param {int} size This is size of the ship.
 * @param {int} row This is the row.
 * @param {int} row This is the column.
 */
function deployShip(id,dir,size,row,col)
{
    for (var i = 1; i <= size; i++)
    {
        if(dir == 0)
        {
            mapArray[row][col + i] = id;
            continue;
        }
        else
        {
            mapArray[row + i][col] = id;
        }
    }
}
// TODO : we need to implement a main function
mapArray = createMatrix(mapLong);
loadShips();
console.log("Matrix - BattleShip game for USer!!!");
showMatrix(mapArray);
getCoordinates();
showMatrix(mapArray);
