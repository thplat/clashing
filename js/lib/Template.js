var Template = (function() {

	return {

		templateUrl: 'http://localhost/clashing/tpl/',
		template: null,

		promise: null,

		load: function(template, bindings) {
			var self = this;
			this.promise = $.get(this.templateUrl + template, function(response){
				self.template = _.template(response)(bindings);
			});
			return this;
		},

		attachTo: function(el, callback) {
			var self = this;
			this.promise.done(function(){
				var appendance = $(self.template).appendTo(el);
				if(typeof callback == 'function')
				{
					callback(appendance);
				}
				return appendance;
			});
		}

	}

})();
