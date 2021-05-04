'use strict';

'use strict';

function Mergesort (arr) 
{
   let n = arr.length;

   if (n > 1)
   {
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];

    for (let i = 0; i < mid; i++)
    {
      left.push(arr[i]);
    } 
    for (let i = mid; i < arr.length; i++) 
    {
      right.push(arr[i]);
    }
    Mergesort(left);
    Mergesort(right);
    Merge(left, right, arr);
   }
  
   return arr;
 
}

function Merge(left, right, arr)
{
  let i = 0;
  let j = 0;
  let k = 0;

   while (i < left.length && j < right.length) {
    if (left[i] <= right[j])
    {
     arr[k] = left[i];
      i = i + 1;
    } 
    else
    {
      arr[k] = right[j];
       j = j + 1;
    } 

     k = k + 1
  }
  if (i < left.length)
  {
   arr[k++] = left[i++];
  }
  else 
  {
   arr[k++] = right[j++];
  }
  return arr;


}

let arr = [8,4,23,42,16,15]

console.log(Mergesort(arr));
   


module.exports = Mergesort;