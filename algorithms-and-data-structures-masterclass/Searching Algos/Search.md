## Binary search

Time complexity - O(log n)

16 elements -> Max 4 steps to be sure the value isn't there / index found.
32 elems-> 5 steps.
Hence, O(log n)

```
function binarySearch(array, value){
  var start=0, end = array.length-1,middle = Math.floor((start+end)/2); 
  while (array[middle]!= value) {
    if(array[middle] > value)
        end = middle -1;
    else
      start = middle+1;
  }
}
```

```
function binarySearch(array, value){
  var temp = recursiveBS(0, array.length-1, array, value);
  console.log("Result: " + temp);
    return temp;
}

function recursiveBS (start, end, array, number) {    
    if( start>end)
        return -1;
    var a_l = parseInt((start + end)/2);
    if( array[a_l] == number)
        return a_l;
    else if (array[a_l] < number) 
        return recursiveBS(a_l+1, end, array, number);
    else 
        return recursiveBS(start, a_l-1, array, number);
}
```
