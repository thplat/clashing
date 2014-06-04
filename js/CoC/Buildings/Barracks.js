/**
 * The Baracks Object holds a Collection of troops
 * The queueSize depends on the Barracks level and
 * indicates how much troops can be trained 
 * (A single troop may consume more than one space per 
 * unit)
 */
function Barracks(level){

	this.level;
	this.troopCollection;
	this.queueSize = [20, 25, 30, 35, 40, 45, 50, 55, 60, 75];

	this.construct = function(level){
		this.level = level-1;
		this.troopCollection = new TroopCollection(this.getCurrentQueueSize());

		console.log(this.troopCollection);
	}

	this.setLevel = function(level){
		this.level = level-1;
	}

	this.getLevel = function(){
		return this.level;
	}

	this.getCurrentQueueSize = function(){
		return this.queueSize[this.level];
	}

	this.create = function(unit){
		this.troopCollection.add(unit);
	}

	this.construct(level);

}

