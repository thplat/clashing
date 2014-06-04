function Barbarian(){

	this.name = 'Barbarian';
	this.maxLevel = 6;
	this.houseingSpace = 1;
	this.trainingTime = 20;

	this.dps = [8,11,14,18,23,26];
	this.hitpoints = [45,54,65,78,95,110];
	this.trainingCost = [25,40,60,80,100,150];

}

Barbarian.prototype = new Unit();
Barbarian.prototype.level = 0;

Barbarian.setLevel = function(level){
	Barbarian.prototype.level = level-1;
}