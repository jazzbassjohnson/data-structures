var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var next = 0;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size + next] = value;
    size++;
  };

  someInstance.dequeue = function(){
    if(size > 0){
      var result = storage[next];
      delete storage[next];
      size--;
      next++;
      return result;
    }
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
