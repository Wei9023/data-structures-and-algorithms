'use strict';
const List = require('../linkedList/linked-list.js');

describe('Linked list', () => {

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

});

