
function TreeNode(data, left, right){
  this.data = data;
  this.right = right || null;
  this.left = left || null;
}

function BST(root){
  this.rootNode = root || null;

}

BST.prototype.push = function(nodeData){
  if(this.rootNode) {
    var currentNode = this.rootNode;
  } else {
    this.rootNode = new TreeNode(nodeData);
  }
}
//
BST.prototype.checkNodeExists = function(nodeData){
  if(this.rootNode) {
    if (nodeData < this.rootNode.data) { this.moveLeft(); }
    if (nodeData > this.rootNode.data) { this.moveRight();}
  } else {
    this.rootNode = new treeNode(nodeData);
  }
}

BST.prototype.moveLeft = function(nodeData) {
}

BST.prototype.moveRight = function(nodeData) {
}
//check if the tree has root node
//if it does, ask the root for its value
//if our value is less than the root's (current node)
//check to the left of that node
//if our value is greater than the roots
//check to the right
