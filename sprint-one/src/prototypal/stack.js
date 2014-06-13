var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someStack = Object.create(stackMethods);
  someStack._size=0;
  someStack._storage={};

  return someStack;

};

var stackMethods = {

  size: function(){
    return this._size;
  },
  pop: function(){
    if(this._size>0){
      this._size--;
      var result=this._storage[this._size];
      delete this._storage[this._size];
      return result;
    }
  },
  push: function(value){
    this._storage[this._size]=value;
    this._size++;
  }

};


