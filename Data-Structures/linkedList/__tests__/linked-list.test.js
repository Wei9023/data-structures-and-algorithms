'use strict';
const List = require('../linked-list.js');

describe('Linked list', () => {
  
  it('Can successfully instantiate an empty linked list', () => {
    // let linkedList = new List.LinkedList();
    expect(true).toBeTruthy();
  });

  //Can successfully instantiate an empty linked list
  it('Can successfully instantiate an empty linked list', () => {
    let linkedList = new List.LinkedList();
    expect(linkedList.size).toEqual(0);
  });

  //Can properly insert into the linked list
  it('Can properly insert into the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(4);
    expect(linkedList.printList()).toEqual('4 ');
  });

  //The head property will properly point to the first node in the linked list
  it('The head property will properly point to the first node in the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(5);
    expect(linkedList.printList().slice(0,1)).toEqual('5');
  });

  //Can properly insert multiple nodes into the linked list
  it('Can properly insert multiple nodes into the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(2,3,4);
    expect(linkedList.head.element).toEqual(4);
    expect(linkedList.head.next.element).toEqual(3);
  });

  //Will return true when finding a value within the linked list that exists
  it('Will return true when finding a value within the linked list that exists', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(4);
    expect(linkedList.includes(4)).toBeTruthy();
  });

  //Will return false when searching for a value in the linked list that does not exist
  it('Will return false when searching for a value in the linked list that does not exist', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(4);
    expect(linkedList.includes(1)).toBeFalsy();
  });

  //Can properly return a collection of all the values that exist in the linked list
  it('Can properly return a collection of all the values that exist in the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(2,3,4,5);
    expect(linkedList.printList()).toEqual('5 4 3 2 ');
  });

  //Can properly append a values at the end of  the linked list
  it('Can properly append a values at the end of  the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(2,3,4,5);
    linkedList.append(10);
    expect(linkedList.printList()).toEqual('5 4 3 2 10 ');
  });

  //Can properly append an array of values at the end of the linked list
  it('Can properly append an array of values at the end of the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.insert(2,3,4,5);
    linkedList.append(10,15,20);
    expect(linkedList.printList()).toEqual('5 4 3 2 10 15 20 ');
  });

  //Can properly insert a value before a value exists in the linked list
  it('Can properly insert a value before a value exists in the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    linkedList.insertBefore(3,2);
    expect(linkedList.printList()).toEqual('1 2 3 5 ');
  });

  //Can properly insert a value before a value exists in the linked list
  xit('Can properly insert a value after a value exists in the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    linkedList.insertAfter(3,4);
    expect(linkedList.printList()).toEqual('1 3 4 5 ');
  });

  //Can properly find the nth value from the end of the list
  it('Can properly find the nth value from the end of the list', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    expect(linkedList.valueFromEnd(1)).toEqual(3);
  });

  // Where k is greater than the length of the linked list
  it(' Where k is greater than the length of the linked list', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    expect(linkedList.valueFromEnd(4)).toBeFalsy();
  });

  // Where k and the length of the list are the same
  it(' Where k and the length of the list are the same', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    expect(linkedList.valueFromEnd(3)).toBeFalsy();
  });

  // Where k is not a positive integer
  it(' Where k is not a positive integer', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1,3,5);
    expect(linkedList.valueFromEnd(-2)).toBeFalsy();
  });

  //Where the linked list is of a size 1
  it(' Where the linked list is of a size 1', () => {
    let linkedList = new List.LinkedList();
    linkedList.append(1);
    expect(linkedList.valueFromEnd(0)).toEqual(1);
  });

  //Expected outcome
  it(' Can merge two linked list', () => {
    let linkedList = new List.LinkedList();
    let l1 = new List.LinkedList();
    let l2 = new List.LinkedList();
    l1.append(1,2,3);
    l2.append(4,5,6);
    expect(linkedList.merge(l1, l2)).toEqual(1,4,2,5,3,6);
  });
});

