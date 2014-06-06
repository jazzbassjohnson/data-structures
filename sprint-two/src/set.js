var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};// this was "undefined", can I do this?
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	if(this._storage[item] === undefined){
		this._storage[item] = true;
	}
};

setPrototype.contains = function(item){
	return this._storage[item] || false;
};

setPrototype.remove = function(item){
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?

 --Static Cost (1)

 */
