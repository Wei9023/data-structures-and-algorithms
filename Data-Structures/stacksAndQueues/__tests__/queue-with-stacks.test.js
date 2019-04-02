'use strict';

const { Stack, PseudoQueue } = require('../queue-with-stacks.js');

describe('PresudoQueue class', () => {
    
  it('Can successfully enqueue', () => {
    let q = new PseudoQueue();
    q.enqueue('a');
    expect(q.s1.top.value).toBe('a');
  });


  //Can successfully enqueue and dequeue
  it('Can successfully enqueue and dequeue with mutiple numbers', () => {
    let q = new PseudoQueue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
  });

  it('When dequeue an empty pseudoqueue', () => {
    let q = new PseudoQueue();
    expect(q.dequeue()).toBeNull();
  });


});