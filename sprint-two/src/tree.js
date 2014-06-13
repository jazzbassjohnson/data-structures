var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(makeTree(value));
};

treeMethods.contains = function(target){
  var result = false;
  var searchChildren=function(tree){
    if (result || (tree.value === target)){
      result = true;
      return;
    }else {
      for (var i = 0; i < tree.children.length; i++){
        searchChildren(tree.children[i]);
      }
    }
  };
//debugger;

  searchChildren(this);
  console.log(result);
  return result;
  //return f;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
