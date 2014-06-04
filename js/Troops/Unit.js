function Unit(){
}

Unit.prototype.getTrainingCost = function(){
	return this.trainingCost[Unit.level];
}

Unit.prototype.getHitpoints = function(){
	return this.hitpoints[this.level];
}

Unit.prototype.getDps = function(){
	return this.dps[this.level];
}

Unit.setLevel = function(level){
	this.level = level-1;
}

Unit.prototype.getLevel = function(){
	return this.level+1;
}
