'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}
    
class Stack { 
  /**
   * Array is used to implement stack 
   */
  constructor() 
  {  
    this.top = null;
  } 
    
  // Functions to be implemented 
  // push(item) 
  push(val) { 
    let node = new Node(val);
    if (this.top) {
      node.next = this.top;
      this.top = node;
    } else {
      this.top = node;
    }
  }
    
  
  // pop() 
  pop() { 
    // return top most element in the stack 
    // and removes it from the stack 
    let top;
    if (this.top) {
      top = this.top;
      this.top = this.top.next;
    }
    if(top){
      return top.value;
    }else{
      return null;
    }

    // if (this.top.next !== null) {
    //   top = this.top;
    //   this.top = this.top.next;
    // } else if (this.top) {
    //   top = this.top;
    //   this.top = null;
    // } else {
    //   return null;
    // }
    

    
  }

  peek() { 
    // return the top most element from the stack 
    // but does'nt delete it. 
    if (this.top) {
      return this.top.value;
    } else {
      return null;
    }
  }    
} 

  
class PseudoQueue  {
  // Array is used to implement a Queue 
  constructor() 
  { 
    this.front = null;
    this.back = null;
    this.s1 = new Stack;
    this.s2 = new Stack;
  } 
                    
  // Functions to be implemented 
  // enqueue(item) 
    

  enqueue(val)  {  
    // Move all elements from s1 to this.s2  
    if(this.s1.top === null){
      this.s1.push(val);
    }else{
      while (this.s1.top){  
        // if(this.s1.top){ 
        this.s2.push(this.s1.pop());
      }  
      //this.s1.pop();  
      // Push item into this.s1  
      this.s1.push(val);  
      console.log('s1',this.s1);
      console.log('s2',this.s2);
      
      // Push everything back to this.s1  
      while (this.s2.top) {  
        this.s1.push(this.s2.pop());  
        //this.s2.pop();  
        console.log('s1-2', this.s1);
        console.log('s2-2',this.s2);
      }
    }
    return this.s1;
  }

  // Dequeue an item from the queue  
  dequeue()  {  
    // if first stack is empty  
    if (!this.s1.top) {  
      this.top = null; 
    }  

    // Return top of this.s1  
    let val = this.s1.peek();  
    this.s1.pop();  
    return val;  
  }
  //   enqueue(val) { 
  //     let enqueueStack = new Stack; 
  //     return enqueueStack.push(val);  
  //   }
    
  
  //   // dequeue() 
  //   dequeue(enqueueStack) { 
  //     let dequeueStack = new Stack;
  //     while(enqueueStack.top){ 
  //       let val = enqueueStack.pop();
  //       dequeueStack.push(val);

  //       while(dequeueStack.top){
  //         enqueueStack.push(top);
  //       }


  //     }
  //   }

}
  
module.exports = {Stack, PseudoQueue};


