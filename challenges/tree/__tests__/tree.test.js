'use strict';

const { Node, BinaryTree, BinarySearchTree } = require('../tree.js');

describe('Binary Seach Tree', () => {
// Can successfully instantiate an empty tree
// Can successfully instantiate a tree with a single root node
// Can successfully add a left child and right child to a single root node
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
  it('Can successfully instantiate an empty tree', () => {
    let tree = new BinaryTree;
    expect(tree).toBeDefined();
  });

  it('Can successfully instantiate a tree with a single root node', () => {
    let tree = new BinaryTree;
    expect(tree.root).toBeDefined();
  });
  
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree = new BinarySearchTree;
    tree.add(30);
    tree.add(15);
    tree.add(50);
    expect(tree.root.data).toEqual(30);
    expect(tree.root.left.data).toEqual(15);
    expect(tree.root.right.data).toEqual(50);
  });

  it('Can successfully add a value into right place', () => {
    let tree = new BinarySearchTree;
    tree.add(30);
    tree.add(25);
    tree.add(15);
    tree.add(50);
    tree.add(37);
    tree.add(60);
    expect(tree.contain(25)).toBeTruthy();
  });


  it('Return false when checking a node value which is not included', () => {
    let tree = new BinarySearchTree;
    tree.add(30);
    tree.add(25);
    tree.add(15);
    tree.add(50);
    tree.add(37);
    tree.add(60);
    expect(tree.contain(45)).toBeFalsy();
  });
});

describe('Binary Tree', () => {

  it('Returns `null` if the tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.breadthFisrtTraversal()).toBeNull();
  });

  it('Can traversal a binary tree in breadth first', () => {
    let tree = new BinarySearchTree();
    let values = [9,4,17,3,6,22,5,7,20];
    values.map( val => tree.add(val));
    // console.log(tree);
    // console.log(tree.breadthFisrtTraversal());
    expect(tree.breadthFisrtTraversal()).toEqual(values);
  });

  it('Returns `null` if the tree is empty', () => {
    const tree = new BinaryTree();
    expect(tree.findMaximumValue()).toBeNull();
  });

  it('Can return the max value inside of a binary tree', () => {
    let tree = new BinarySearchTree();
    let values = [9,4,17,3,6,22,5,7,20];
    values.map( val => tree.add(val));
    // console.log(tree);
    // console.log(tree.findMaximumValue());
    expect(tree.findMaximumValue()).toEqual(22);
  });

  it('Can return the max value inside of a binary tree', () => {
    let tree = new BinarySearchTree();
    let values = [9,4,17,3,6,22,5,7,20];
    values.map( val => tree.add(val));
    // console.log(tree);
    // console.log(tree.findMaximumValue());
    expect(tree.oddSum()).toEqual(41);
  });

});