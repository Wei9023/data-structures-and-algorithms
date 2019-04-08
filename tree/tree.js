'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  inorder(node) { 
    let treeArr = [];
    if(node !== null) { 
      this.inorder(node.left); 
      console.log(node.data);
      treeArr.push(node.data); 
      this.inorder(node.right); 
    } 
    return treeArr;
  } 

  // Performs preorder traversal of a tree     
  preorder(node) { 
    let treeArr = [];
    if(node != null) { 
      console.log(node.data);
      treeArr.push(node.data); 
      this.preorder(node.left); 
      this.preorder(node.right); 
    } 
    return treeArr;
  } 

  postorder(node) {
    let treeArr = []; 
    console.log(node);
    if(node != null) { 
      this.postorder(node.left);
      console.log(node.left) ;
      this.postorder(node.right); 
      console.log(node.right);
      console.log(node.data);
      treeArr.push(node.data); 
    } 
    return treeArr;
  }
}


class BinarySearchTree extends BinaryTree {

  add(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;   
    } else {
      this.addNode( this.root, newNode);
    }
  }

  addNode (node, newNode) {
    if( newNode.data < node.data) {
      if( node.left === null ){
        node.left = newNode;
      }else {
        this.addNode(node.left, newNode);
      }
    }else{
      if(node.right === null){
        node.right = newNode;
      }else{
        this.addNode(node.right, newNode);
      }
    }
  }


  // search for a node with given data 
  contain(value) { 
    let doesContain = false;
    //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
    function recurse(bst) {
      if(bst === null){
        doesContain = false;
      }else{
        if (bst.data === value) {
          doesContain = true;
        } else if (bst.left !== undefined && value < bst.data) {
          recurse(bst.left);
        } else if (bst.right !== undefined && value > bst.data) {
          recurse(bst.right);
        }
      }
    }
    recurse(this.root);
    return doesContain; 
  } 
}


module.exports = {BinaryTree, BinarySearchTree};