'use strict';

const { Cat, Dog, AnimalShelter } = require('../fifo-animal-shelter.js');

describe('Animal shelter', () => {
    
  it('Can successfully enqueue', () => {
    let shelter = new AnimalShelter();
    let cat = new Cat('vv1');
    let dog = new Dog('vv2');
    shelter.enqueue(cat);
    // console.log('cat',shelter);
    shelter.enqueue(dog);
    // console.log('dog',shelter);
    expect(shelter.dogQueue.peek()).toBe(dog);
  });

  it('Can successfully dequeue', () => {
    let shelter = new AnimalShelter();
    let cat = new Cat('vv1');
    let dog = new Dog('vv2');
    shelter.enqueue(cat);
    // console.log('cat',shelter);
    shelter.enqueue(dog);
    // console.log('dog',shelter);
    expect(shelter.dequeue('dog')).toBe(dog);
  });

  it('when dequeue other animal', () => {
    let shelter = new AnimalShelter();
    let cat = new Cat('vv1');
    let dog = new Dog('vv2');
    shelter.enqueue(cat);
    console.log('cat',shelter);
    shelter.enqueue(dog);
    console.log('dog',shelter);
    expect(shelter.dequeue('pig')).toBe(null);
  });

});