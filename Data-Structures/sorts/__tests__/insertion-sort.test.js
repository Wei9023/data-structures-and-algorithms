'use strict';

const { insertionSort } = require('../insertion-sort.js');

// A sorted array returns the same sorted array
// A backwards-sorted array returns the array sorted
// An empty array returns the same empty array
// An array of one element returns the same single-element array

describe('insertionSort', () => {

  it('A randomly generated unsorted array returns the array sorted', () => {
    let arr = [];
    for( let i = 0; i< 5; i++){
      arr[i] = Math.random()*10;
    }
    expect(insertionSort(arr)[1]< insertionSort(arr)[3]).toBeTruthy();
  });

  it('A sorted array returns the same sorted array', () => {
    let arr = [1,3,5];
    expect(insertionSort(arr)).toEqual([1,3,5]);
  });

  it('A backwards-sorted array returns the array sorted', () => {
    let arr = [5,3,1];
    expect(insertionSort(arr)).toEqual([1,3,5]);
  });

  it('An empty array returns the same empty array', () => {
    let arr = [];
    expect(insertionSort(arr)).toEqual([]);
  });

  it('An array of one element returns the same single-element array', () => {
    let arr = [1];
    expect(insertionSort(arr)).toEqual([1]);
  });
  
});
  