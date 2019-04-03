'use strict';

const { Queue } = require('../stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Cat {
  constructor(name) {
    this.name = name;
    this.id = null;
  }
}

class Dog {
  constructor(name) {
    this.name = null;
    this.id = null;
  }
}

class AnimalShelter  {
  constructor() 
  { 
    this.id = 0;
    this.front = null;
    this.back = null;
    this.catQueue = new Queue();
    this.dogQueue = new Queue();
  }
  
  enqueue(animal) {
    
    if ( animal instanceof Cat ) {
      animal.id = this.id++;
      this.catQueue.enqueue(animal);
    } else if ( animal instanceof Dog ) {
      animal.id = this.id++;
      this.dogQueue.enqueue(animal);
    }else{
      console.log('animalType3',typeof(animal));
      return null;
    }
  }

  dequeue(pref) {
    if ( pref  === 'cat' ){
      return this.catQueue.dequeue ();
    }else if( pref === 'dog') {
      return this.dogQueue.dequeue ();
    } else {
      return null;
    }
  }
    
  // dequeueOldest(){
  //   if(this.catQueue.front.id > this.dogQueue.front.id){
  //     return this.dogQueue.dequeue();
  //   }else if(this.catQueue.front.id < this.dogQueue.front.id){
  //     return this.catQueue.dequeue();
  //   }
  
}


module.exports = {AnimalShelter, Cat, Dog};