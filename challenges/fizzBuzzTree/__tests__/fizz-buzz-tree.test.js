'use strict';

const {BinarySearchTree} = require('../fizz-buzz-tree.js');

describe('Binary Tree', () => {
    

  let tree = null;

  it('Can do fizzbuzztree', () => {
    tree = new BinarySearchTree();
    let values = [9,4,17,3,6,22,5,7,20];
    values.map( val => tree.add(val));
    expect(tree.FizzBuzzTree()).toEqual([ 'Fizz', 4, 'Fizz', 'Fizz', 'Buzz', 7, 17, 22, 'Buzz' ]);
  });

  it('When no node can be devides by 3 or 5, return the same tree', () => {
    tree = new BinarySearchTree();
    let values = [8,4,17,2,22,7,23];
    values.map( val => tree.add(val));
    expect(tree.FizzBuzzTree()).toEqual(tree.preorder());
  });

  it('when no node in the tree, return false', () => {
    tree = new BinarySearchTree();
    let values = [];
    values.map( val => tree.add(val));
    expect(tree.FizzBuzzTree()).toBeFalsy();
  });
});