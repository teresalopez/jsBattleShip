/*
Ship
	Given a ship
	When a ship is hit
	Then verify if a ship is killed 
*/
describe('Ship', function(){

	
	describe('Given a ship ', function(){
	
		var ship = new Ship(1);
		
		it('When a ship is hit', function(){
			ship.getShot();
			expect(ship.status).toBe('HIT');
			expect(ship.numShots).toBe(1);
		});
		it('Then verify if the ship is killed', function(){
			ship.getShot();
			expect(ship.status).toBe('KILL');
			expect(ship.numShots).toBe(ship.size);
		});

	});
});