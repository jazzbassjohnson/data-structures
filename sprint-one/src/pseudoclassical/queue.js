var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._size = 0;
  this._next = 0;
};
Queue.prototype.enqueue = function(value){
	this._storage[this._size + this._next] = value;
	this._size++;
}
Queue.prototype.dequeue = function(){
	if(this._size >0){
		var result = this._storage[this._next];
		this._size--;
		delete this._storage[this._next];
		this._next++;
		return result;
	}
}
Queue.prototype.size = function(){
	return this._size;
}

