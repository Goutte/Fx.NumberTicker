/*
---

description: Make a number in the innerText of a DOM Element smoothly change from one value to another

authors:
  - Antoine Goutenoir <antoine@goutenoir.com>

demo:
  - http://jsfiddle.net/goutte/K6R8k/

licence:
  - libre

requires:
  - Fx

provides:
  - Fx.NumberTicker
  - Element.numberTicker

...
*/
Fx.NumberTicker = new Class({

  Extends: Fx,

  options: {
    // Function to mutate the value just before it is printed
    transformer: function(i){return i}
  },

  initialize: function(element, options) {
    this.parent(options);
    this.element = document.id(element);
  },

  set: function(value) {
    this.element.set('text', this.options.transformer(value.round()));
    return this;
  },

  start: function(from, to) {
    if (typeof to == 'undefined') {
      to = from;
      from = this.element.get('text');
      if (typeof from == 'undefined' || from === null || from === '') {
        from = 0;
      } else {
        from = from.toInt();
      }
    }
    return this.parent (from, to);
  }

});


Element.Properties.numberTicker = {

	set: function(options){
		var numberTicker = this.retrieve('numberTicker');
		if (numberTicker) numberTicker.destroy();
		return this.eliminate('numberTicker').store('numberTicker:options', options);
	},

	get: function(){
		var numberTicker = this.retrieve('numberTicker');
		if (!numberTicker){
			numberTicker = new Fx.NumberTicker(this, this.retrieve('numberTicker:options'));
			this.store('numberTicker', numberTicker);
		}
		return numberTicker;
	}

};


Element.implement({

	numberTicker: function(to, options){
		if (options) this.set('numberTicker', options);
		this.get('numberTicker').start(to);
		return this;
	}

});