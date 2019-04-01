'use strict';

const { Stack, Queue } = require('../stacks-and-queues.js');

describe('`Stack` class', () => {

  //Can successfully push onto a stack
  it('Can successfully instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack).toBeDefined();
  });


  it('Can successfully `push` onto a stack', () => {
    let stack = new Stack();
    stack.push('hello');
    expect(stack.top.value).toBe('hello');
  });

  //Can successfully push multiple nodes onto a stack

  it('Can successfully `push` multiple nodes onto a stack', () => {
    let stack = new Stack();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    expect(stack.top.value).toBe('3');
    expect(stack.top.next.value).toBe('2');
    expect(stack.top.next.next.value).toBe('1');
  });
  //Can successfully pop off the stack

  it('Can successfully `pop` off the stack', () => {
    let stack = new Stack();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    // console.log(stack);
    expect(stack.top.value).toBe('3');
    stack.pop();
    expect(stack.top.value).toBe('2');
  });
  //Can successfully empty a stack after multiple pops.
  it('Can successfully empty a stack after multiple `pop`s.', () => {
    let stack = new Stack();
    stack.push('1');
    stack.push('2');
    stack.push('3');
    expect(stack.top.value).toBe('3');
    stack.pop();
    expect(stack.top.value).toBe('2');
    stack.pop();
    expect(stack.top.value).toBe('1');
    stack.pop();
    expect(stack.top).toBeNull();
  });
  //Can successfully peek the next item on the stack.
  it('Can successfully peek the next item on the stack.', () => {
    let stack = new Stack();
    stack.push('hello');
    expect(stack.peek()).toBe('hello');
  });
});



describe('`Queue` class', () => {
  //Can successfully instantiate an empty queue
  it('Can successfully instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue).toBeDefined();
  });

  //Can successfully enqueue onto a queue
  it('Can successfully enqueue onto a queue', () => {
    let queue = new Queue();
    queue.enqueue('hello');
    expect(queue.front.value).toBe('hello');
  });
  //Can successfully enqueue multiple items into a queue
  it('Can successfully enqueue multiple items into a queue', () => {
    let queue = new Queue();
    queue.enqueue('1');
    expect(queue.front.value).toBe('1');
    queue.enqueue('2');
    expect(queue.back.value).toBe('2');
    queue.enqueue('3');
    expect(queue.back.value).toBe('3');
  });
  //Can successfully dequeue off of a queue the expected value
  it('Can successfully dequeue off of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue('1');
    expect(queue.back.value).toBe('1');
    queue.enqueue('2');
    expect(queue.back.value).toBe('2');
    expect(queue.front.value).toBe('1');
    queue.dequeue();
    expect(queue.front.value).toBe('2');
  });
  //Can successfully peek into a queue, seeing the expected value
  it('Can successfully peek into a queue, seeing the expected value', () => {
    let queue = new Queue();
    queue.enqueue('1');
    expect(queue.back.value).toBe('1');
    expect(queue.peek()).toBe('1');
    queue.enqueue('2');
    expect(queue.back.value).toBe('2');
    expect(queue.peek()).toBe('1');
    queue.enqueue('3');
    expect(queue.back.value).toBe('3');
    expect(queue.peek()).toBe('1');
    queue.enqueue('4');
    expect(queue.back.value).toBe('4');
    expect(queue.peek()).toBe('1');
  });
  //Can successfully empty a queue after multiple dequeues
  it('Can successfully empty a queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue('1');
    queue.enqueue('2');
    queue.enqueue('3');
    queue.enqueue('4');
    expect(queue.back.value).toBe('4');
    expect(queue.peek()).toBe('1');
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.back).toBeNull();
    expect(queue.peek()).toBeNull();
  });
});
//Can successfully instantiate an empty queue