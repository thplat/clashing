function TroopCollection(maxSize){

	this.maxSize = maxSize;
	this.troops = [];

}

TroopCollection.prototype.add = function(troops){

	var troops = troops instanceof Array ? troops : [troops];

	if(this.troops.length + troops.length > this.maxSize){
		throw "Maximum collection size exceeded";
	}

	this.troops = this.troops.concat(troops);

};

TroopCollection.prototype.remove = function(index){

	var index = (index !== undefined) ? false : index;

	if(!index)
		this.troops.pop();
	else
		this.troops.splice(index, 1);

};

TroopCollection.prototype.getItem = function(index){

	return this.troops[index];

}

TroopCollection.prototype.totalTrainingCost = function(){

	var total = 0;

	for(var i = 0; i < this.troops.length; i++){
		total += this.troops[i].getTrainingCost();
	}

	return total;
}

TroopCollection.prototype.totalHitpoints = function(){

	var total = 0;

	for(var i = 0; i < this.troops.length; i++){
		total += this.troops[i].getHitpoints();
	}

	return total;
}

TroopCollection.prototype.totalDps = function(){

	var total = 0;

	for(var i = 0; i < this.troops.length; i++){
		total += this.troops[i].getDps();
	}

	return total;
}

TroopCollection.prototype.totalHousingSpace = function(){

	var total = 0;

	for(var i = 0; i < this.troops.length; i++){
		total += this.troops[i].housingSpace;
	}

	return total;
}

TroopCollection.prototype.totalTrainingTime = function(){

	var total = 0;

	for(var i = 0; i < this.troops.length; i++){
		total += this.troops[i].trainingTime;
	}

	return total;	

}