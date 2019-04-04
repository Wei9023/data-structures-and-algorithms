'use strict';

const { isBalanced } = require('../multi-bracket-validation.js');

describe('isBalanced', () => {
    
  it('When balanced return true', () => {
    let str = '[{}]';
    expect(isBalanced(str)).toBeTruthy();
  });

  it('When not balance return false', () => {
    let str = '[[{))';
    expect(isBalanced(str)).toBeFalsy();
  });

  it('When string including non-bracket charactor', () => {
    let str1 = '[hello]';
    let str2 = '[{hello]';
    expect(isBalanced(str1)).toBeTruthy();
    expect(isBalanced(str2)).toBeFalsy();
  });

});