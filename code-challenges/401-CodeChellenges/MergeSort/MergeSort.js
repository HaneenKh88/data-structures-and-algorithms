'use strict';

function QuickSort (arr, left, right) 
{
 
 
    if (left >= right) return;
        
        let position = Partition(arr, left, right)
        
        QuickSort(arr, left, position - 1)

        QuickSort(arr, position + 1, right)
}
function Partition(arr, left, right)
{
 
    let pivot = arr[right]
   
    let low = left - 1;
    for( let i = left; i<= right; i++)
    {
      if (arr[i] <= pivot)
      {
      
      Swap(arr, i, ++low)
      }
      
    }
     return low;  

    
  }
function Swap(arr, i, low)
{
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;


}

let arr = [8, 4, 23, 42, 16, 15];
QuickSort(arr, 0, arr.length - 1);
console.log(arr);



module.exports = QuickSort;
