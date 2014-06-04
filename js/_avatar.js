var Avatar = function(el) {

	this.type;
	this.avatar;
	this.stars = 1;

	this.construct = function(el){
		var self = this;

		this.avatar = $(el);
		this.type = el.substring(1);
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
		if(this.stars >= 6)
			return false;
		this.stars++;
		this.update();
	};

	this.removeStar = function(){
		if(this.stars <= 1)
			return false;
		this.stars--;
		this.update();
	};

	this.displayStars = function(){

		var starBar = this.avatar.find('.star-bar').html('');
		var markup = '<div class="star"></div>';
		var glueString = '';

		for(var i = 0; i < this.stars; i++){
			glueString += markup;
		}

		$(glueString).appendTo(starBar);

	}

	this.update = function(){
		this.displayStars();
	}

	this.construct(el);

};