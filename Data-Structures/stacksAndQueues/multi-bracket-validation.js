'use strict';

function isBalanced(s) {
  s = s.split('');
  let storage = [];
  let open = {
    '{':'}',
    '(':')',
    '[':']',
  };
    
  for (let i = 0; i < s.length; i++) {
    if (s[i] in open) { //push open tags into array
      storage.push(s[i]);
      console.log('arr',storage);
    }else if (s[i] ===')' || s[i] ==='}' ||s[i] ===']'  ) { //s[i] is a closing bracket 
      let recentOpen = storage.pop();
      console.log('top value',recentOpen);
      console.log('close',s[i]);
      if(open[recentOpen] !== s[i]) { //if 1st close bracket isn't compliment of opening bracket NB
        return false;
      }
    }
  }
  return storage.length ? false: true; //edge case could be that everything but one char is balanced
}

module.exports = {isBalanced};
