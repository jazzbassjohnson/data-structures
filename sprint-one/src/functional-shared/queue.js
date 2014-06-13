var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someQueue ={};
  someQueue._size = 0;
  someQueue._next = 0;
  someQueue._storage ={};
  _.extend(someQueue, queueMethods);
  return someQueue;

};

var queueMethods = {};

queueMethods.dequeue = function(){
  if(this._size > 0){
    var result = this._storage[this._next];
    delete this._storage[this._next];
    this._next++;
    this._size--;

    return result;
  }
};

queueMethods.enqueue = function(value){
  this._storage[this._size + this._next] = value;
  this._size++;
};

queueMethods.size = function(){
  return this._size;
};



