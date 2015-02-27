// validate_shot.js
/** Validate shot for battle ship
* First version 1.0
* Author: Reyna Ulaque
**/
console.log('Validate shot first version');
// a -> ship a
// b -> ship b
// x -> shot cell

var long_ship_a = 2; // long of ship a
var long_ship_b = 3; // long of ship a
// matrix of developer 
var matrix_d = [['0','0','0','0'], 
				['0','0','a','0'],
				['0','0','a','0'],
				['0','b','b','b']];
// matrix of user
var matrix_user = [['0','0','0','0'],
				['0','0','0','0'],
				['0','0','0','0'],
				['0','0','0','b']];				
				
//Function to update matrix
var update_matrix_user = function(x_axis,y_axis,value) {
	matrix_user[x_axis][y_axis] = value
};

// Function to validate specific ship if it is hit or kill
var validate_ship = function (x_axis,y_axis, ship, long_ship){
	if (matrix_d[x_axis][y_axis] == ship && long_ship != 1 && long_ship_b != 0)
	{
		console.log('You hit this ship ' + ship);
		update_matrix_user(x_axis,y_axis,'X')
	}
	else if (matrix_d[x_axis][y_axis] == ship && long_ship == 1)
	{			
		update_matrix_user(x_axis,y_axis,'X')
		console.log('You kill this ship ' + ship);	
	} 
};
// Function to validate if some ship is hit or miss
var validate_ships = function(x_axis,y_axis) {
	if (matrix_d[x_axis][y_axis] == 'a') 
	{
		validate_ship(x_axis,y_axis,'a', long_ship_a)
		long_ship_a = long_ship_a - 1		
	}
	else if (matrix_d[x_axis][y_axis] == 'b')
	{	
		validate_ship(x_axis,y_axis,'b',long_ship_b)
		long_ship_b = long_ship_b - 1		
	}
	else if (matrix_d[x_axis][y_axis] == '0')
		console.log('You miss the ship ');
};

//Function to validate shot 			
var validate_shot = function(x_axis,y_axis){
	if  (matrix_user[x_axis][y_axis] != 'X')
		validate_ships(x_axis,y_axis);
	else
		console.log('This space was already shoted');
};

//Function to request a shot
var request_shot = function() {
	var x_axis = window.prompt('Enter x value');
	var y_axis = window.prompt('Enter y value');
	validate_shot(x_axis,y_axis);
};

