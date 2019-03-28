/* eslint-disable no-undef */
'use strict';

/**
 * Define class node
 */
class Node {
  //constructor
  constructor(element){
    this.element = element;
    this.next = null;
  }
}
/**
 * Linkedlist class
 */
class LinkedList {

  constructor() {
    this.head = null;
    this.size =0;
  }

  // functions to be implemented 
  /**
     * insert(element)
     * @param {*} element 
     */
  insert(...element){
    // let eles = [...element]
    element.forEach((ele)=>{
      // console.log(element);
      let node = new Node(ele);
      // console.log(node);
      let current = this.head;
      // console.log(current);
      node.next = current;
      this.head = node;
      // console.log(this.head);
      this.size ++;
    });
  }
    
  /**
     * includes(value)
     * @param {*} element 
     */
  includes(element){
    let current = this.head;

    //iterate over the list
    while (current !== null) {
      //comparing element with current element if found then return ture
      if (current.element === element) {
        return true;
      }
      return false;
    }
  }

  /**
     * print the list
     */
  printList(){
    let current = this.head;
    let str = '';
    while (current !== null) {
      str += (current.element + ' ');
      current = current.next;
    //   console.log(str);
    }
    return str;
  }

  append(...element){
    element.forEach(ele => {
      let node = new Node(ele);
      let current = this.head;

      if(current ===null || current.element === null){
        this.head = node;
      }else{
        while(current!== null){
          if(current.next === null){
            current.next = node;
            break;
          }
          current = current.next;
        }
      }
    });
  }

  insertBefore(value, newValue){
    let node = new Node(newValue);
    let current = this.head;        
    let previous = null;

    while(current !== null){        
            
      previous = current; 
      current = previous.next; 

      if(current.element === value){
        previous.next = node;
        node.next = current; 
        break; 
      }

    }
  }

  insertAfter(value, newValue){
    let node = new Node(newValue);
    let current = this.head;        

    while(current !== null){        
      if(current.element === value){
        current.next = node; 
        node.next = current.next;
        break;
      }
      current = current.next; 
    }
  }


  valueFromEnd(k){
    let countLength = 0;
    let current = this.head;
    let arr = [];
    let arraySize = k+1;
    

    if(!this.head || k < 0){
      return false;
    } else{
      while(current !== null){
        arr.length = arraySize;
        arr[countLength % arraySize] = current.element; 
        countLength ++;  
        current = current.next;  
      }
      return arr[countLength % arraySize];
      
    }
  }

  // merge(linkedListSecond){
  //   let first = this.head;
  //   let second = linkedListSecond.head;
  //   let firstNext = null;
  //   let secondNext = null;

  //   while(first.next !== null && second.next !== null){
  //     firstNext =first.next;
  //     secondNext = second.next;
  //     second.next = firstNext;
  //     first.next = second;
  //     first = first.next;
  //     second = second.next;
  //   }
  //   return ;
  // }
  merge(l1,l2){
    var ret = null,    // return value, first node
      prev = null;   // previous node
    
    while (l1 && l2) {
      if (l1.element < l2.element) {
        // l1.value < l2.value, join l1 node to the list and  step to the next l1
        prev ? prev.next = prev = l1
          : ret = prev = l1;
        l1 = l1.next;
      } else {
        // l2.value <= l1.value, join l2 node to the list and step to the next l2
        prev ? prev.next = prev = l2
          : ret = prev = l2;
        l2 = l2.next;
      }
    }
    if (!l1) {
      // no more l1 nodes, join l2 to the list
      prev ? prev.next = l2
        : ret = l2;
    } else {
      // no more l2 nodes, join l1 to the list
      prev ? prev.next = l1
        : ret = l1;
    }
    return ret;
  }
}

module.exports = {LinkedList};