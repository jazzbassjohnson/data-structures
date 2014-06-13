var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue = Object.create(queueMethods);
  someQueue._storage ={};
  someQueue._size = 0;
  someQueue._next =0;
  return someQueue;
};

var queueMethods = {};

queueMethods.size = function(){
  return this._size;
};
queueMethods.enqueue = function(value){
  this._storage[this._next + this._size]= value;
  this._size++;
};
queueMethods.dequeue =function(){
  if(this._size >0){
    var result = this._storage[this._next];
    delete this._storage[this._next];
    this._next++;
    this._size--;
    return result;
  }
};



