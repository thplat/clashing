function Archer(){

	this.name = 'Archer';
	this.maxLevel = 6;
	this.housingSpace = 1;
	this.trainingTime = 250;

	this.dps = [8,11,14,18,23,26];
	this.hitpoints = [45,54,65,78,95,110];
	this.trainingCost = [25,40,60,80,100,150];

}

Archer.prototype = new Unit();
Archer.prototype.level = 0;

Archer.setLevel = function(level){
	Archer.prototype.level = level-1;
}