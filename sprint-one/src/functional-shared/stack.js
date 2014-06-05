var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = {};
  stackInstance._storage = {};
  stackInstance._size = 0;
  _(stackInstance).extend(stackMethods);
  return stackInstance;

};

var stackMethods = {
	push: function(value){
		this._storage[this._size] = value;
		this._size++;
	},
	pop: function(){
		if(this._size >0){
			this._size--
			var result = this._storage[this._size];
			delete this._storage[this._size];
			return result;
		}
	},
	size: function(){return this._size;}

};


