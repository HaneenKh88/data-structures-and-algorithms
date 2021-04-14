'use strict';

function multiBracketValidation(input)
{
// let newArr = [];
   let count1 = 0;
   let count2 = 0;
   let count3 = 0;



   if(input.length <= 1)
   {
       return false;
   }

  for (let i = 0; i < input.length; i++) {
      
      if(input[i] === '(' || input[i] === ')')
      {
        // newArr.push(BracketArr[i]);
        count1++;
       
      }
      else if(input[i] === '{' || input[i] === '}')
      {
        // newArr.push(BracketArr[i]);
        count2++;
        
      }
      else if(input[i] === '[' || input[i] === ']')
      {
        // newArr.push(BracketArr[i]);
        count3++;
      
      }
    
      
  }


  if(count1 %2 === 0 && count2 %2 === 0 && count3 %2 === 0)
  return true;
  else 
  return false
}

module.exports  = multiBracketValidation;

console.log(multiBracketValidation('{}(){}'));
console.log(multiBracketValidation('()[[Extra Characters]]'));
console.log(multiBracketValidation('{}{Code}[Fellows](())'));
console.log(multiBracketValidation('[({}]'));
console.log(multiBracketValidation('[}'));



