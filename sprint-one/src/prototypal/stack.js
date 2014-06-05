var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);
  stackInstance._storage = {};
  stackInstance._size = 0;
  return stackInstance;

};

var stackMethods = {};

stackMethods.push = function(value){
	this._storage[this._size] = value;
	this._size++;
};
stackMethods.pop = function(){
	if(this._size > 0){
		this._size--;
		var result = this._storage[this._size];
		delete this._storage[this._size];
		return result;
	}
};
stackMethods.size = function(){
	return this._size;
};

