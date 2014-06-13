var makeBinarySearchTree = function(value){

  var  tree = {};


  tree.left = null;
  tree.right = null;
  tree.value = value;
  _.extend(tree, bTreeMethods);


  return tree;


};
var bTreeMethods = {};

bTreeMethods.insert = function(value){

  function locateInsert(tree){

    if(value < tree.value){
      if(tree.left === null){
        tree.left = makeBinarySearchTree(value);
      }else{
        locateInsert(tree.left);
      }
    }else{
      if(tree.right === null){
        tree.right = makeBinarySearchTree(value);
      }else{
        locateInsert(tree.right);
      }
    }
  }
  locateInsert(this);

};
bTreeMethods.contains = function(target){

  var result = false;

  function locateTarget(tree){
    if(tree.value===target){
      result = true;
      return;
    } else if (target < tree.value) {
      if (tree.left !== null){
        locateTarget(tree.left);
      }
    } else  {
      if (tree.right !== null){
        locateTarget(tree.right);
      }
    }
  }

  locateTarget(this);
  return result;

};
bTreeMethods.depthFirstLog = function(callback){

  function depthFirst(tree){
    callback(tree.value);
    if(tree.left !== null){
      depthFirst(tree.left);
    }
    if(tree.right !== null){
      depthFirst(tree.right);
    }
  }
  depthFirst(this);



};

/*
 * Complexity: What is the time complexity of the above functions?
 */
