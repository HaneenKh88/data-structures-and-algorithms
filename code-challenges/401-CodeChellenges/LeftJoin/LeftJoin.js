'use strict';



function LeftJoin(left,right) {

  let results = [];
  let table = left.table;

  if((left && !right) || (!left && right)) {
    return "error";
  }

  if(Object.keys(left.table).length === 0) {
    return "There is no hash in the left table"
  }
  
 
  for (let i = 0; i < table.length; i++) {
      
    if (table[i]) {

      let key = Object.keys(table[i].head.value)[0];
      let val = Object.values(table[i].head.value)[0];
      let val2 = right.get(key);
      results.push([key, val, val2]);
    
    }
   
  }

  
  
  return results;

}


module.exports = LeftJoin;
