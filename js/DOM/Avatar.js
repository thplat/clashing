var Avatar = function(el, unit) {

	this.avatar;
	this.unit;

	this.construct = function(el, unit){
		var self = this;

		this.unit = unit;

		this.avatar = $(el);
		if(!this.avatar.hasClass('avatar-wrapper'))
			throw new Error('An avatar class has to be assigned to an avatar Element');

		Template.load('partials/avatar.html').attachTo(this.avatar, function(){
			self.attachHandlers();
		});

	};

	this.attachHandlers = function(){

		this.avatar.find('.lv.up').on('click', $.proxy(this.addStar, this));
		this.avatar.find('.lv.down').on('click', $.proxy(this.removeStar, this));

		this.update();
	}

	this.addStar = function(){
		this.unit.levelUp();
		this.update();
	};

	this.removeStar = function(){
		this.unit.levelDown();
		this.update();
	};

	this.displayStars = function(){

		var starBar = this.avatar.find('.star-bar').html('');
		var markup = '<div class="star"></div>';
		var glueString = '';

		for(var i = 0; i < this.unit.prototype.level + 1; i++){
			glueString += markup;
		}

		$(glueString).appendTo(starBar);

	}

	this.update = function(){
		this.displayStars();
	}

	this.construct(el, unit);

};