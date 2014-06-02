var BarracksController = function(el){

	this.el;
	this.barracks = {};
	this.maxBarracks = 4;

	this.trainableTroops = ['barbarian', 'archer', 'goblin', 'giant', 'wallbreaker', 'balloon', 'wizard', 'healer', 'dragon', 'pekka'];

	this.construct = function(el){
		this.el = $(el);
		this.attachEventHandlers();
	};

	this.attachEventHandlers = function(){
		this.el.find('.add-barracks').on('click', $.proxy(this.addBarracks, this));
	}

	this.addBarracks = function(){
		alert("Barracks added");
	}

	this.construct(el);

};
