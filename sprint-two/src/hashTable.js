var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  	if(this._storage[i] === undefined){
  		this._storage[i] = v;
  	}else{
  		this._storage[k] = v;
  	}
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage[k]=== undefined){
  	return this._storage[i] || null;
  }else{
  	return this._storage[k];
  }
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	delete this._storage[i];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
