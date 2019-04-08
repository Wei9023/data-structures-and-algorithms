'use strict';

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

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

  preorder(node = this.root, result=[]){
    if(node !== null) {
      result.push(node.data);
      this.FizzBuzzTree(node.left, result);
      this.FizzBuzzTree(node.right, result);
      return result;
    }
  }
  
  
  FizzBuzzTree(node = this.root, result=[]){
    let FizzBuzz= (value)=>{
      if(value % 5 === 0 && value % 3 === 0 ){
        value = 'FizzBuzz';
      } else if ( value % 3 === 0){
        value = 'Fizz';
      } else if ( value % 5 === 0 ){
        value = 'Buzz';
      }
      return value;
    };
      
    if(node !== null) {
      result.push(FizzBuzz(parseInt(node.data)));
      this.FizzBuzzTree(node.left, result);
      this.FizzBuzzTree(node.right, result);
      return result;
    }
  }
}


module.exports = {BinarySearchTree};