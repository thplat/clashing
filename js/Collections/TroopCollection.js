function TroopCollection(maxSize){

	this.maxSize = maxSize;
	this.troops = [];

}

TroopCollection.prototype.add = function(troops){

	var troops = troops instanceof Array ? troops : [troops];

	if(this.getTroopSize(troops) + this.getTroopSize(this.troops) > this.maxSize){
		throw new Error("Maximum collection size exceeded");
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

};

TroopCollection.prototype.getTroopSize = function(troops){

	var troops = troops instanceof Array ? troops : [troops];

	var currentSize = 0;
	for(var i = 0; i < troops.length; i++){
		currentSize += troops[i].getHousingSpace();
	}

	return currentSize;

};

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