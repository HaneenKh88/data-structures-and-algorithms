"use strict";


  function RepeatedWord(str) {
    let words = str.match(/\w+/g);
   
    let NewArr = [];
    
    for (let i = 0; i < words.length; i++) {
     
    let word = words[i].toLowerCase();
    if(NewArr.includes(word))
    {
      return word;
    }
    else if(!NewArr.includes(word))
    {
      NewArr.push(word);
    }
  }
  return "There is no duplicated words" ;
  }


module.exports = RepeatedWord;