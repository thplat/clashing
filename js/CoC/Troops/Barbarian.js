function Barbarian(){

	this.name = 'Barbarian';

	this.housingSpace = 1;
	this.trainingTime = 20;

	this.dps = [8,11,14,18,23,26];
	this.hitpoints = [45,54,65,78,95,110];
	this.trainingCost = [25,40,60,80,100,150];

}

Barbarian.prototype = new Unit();
Barbarian.prototype.level = 0;
Barbarian.prototype.maxLevel = 5;

Barbarian.setLevel = function(level){
	Barbarian.prototype.level = level-1;
}

Barbarian.getMaxLevel = function(){
	return Barbarian.prototype.maxLevel;
}

Barbarian.levelUp = function(){
	if(Barbarian.prototype.level + 1 > Barbarian.prototype.maxLevel)
		return;
	Barbarian.prototype.level++;
}

Barbarian.levelDown = function(){
	if(Barbarian.prototype.level - 1 < 0)
		return;	
	Barbarian.prototype.level--;
}