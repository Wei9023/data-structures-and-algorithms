'use strict'

const arrayBinary = require('../array-binary-search.js');

describe('Array-binary-search', () => {
    it('Expected ontput when target value in the array', ()=> {
        let arr=[4,8,15,16,23,42];
        let value = 15;
        let expectedOutput = arrayBinary.search(arr,value);
        expect(expectedOutput).toEqual(2);
    })

    it('Expected ontput when value is not in the array', ()=> {
        let arr =[11,22,33,44,55,66,77];
        let value = 88;
        let expectedOutput = arrayBinary.search(arr,value);
        expect(expectedOutput).toEqual(-1);
    })

    it('Not allow unsorted array', () => {
        let arr = [1,15,2,33,25];
        let value = 2;
        let expectedOutput = arrayBinary.search(arr,value);
        expect(expectedOutput).toBeFalsy();
    })
})