## Frequency counter problem

Problem: Given 2 array, check if the square of each value in array1 is present in array2. In case of repititions, check if the frequency is same too.

Naive solution: Nested loop. O(n^2)

Better solution: O(n)

```
function same(arr1, arr2) {
    var freqCount1 = {}, freqCount2= {}

    for(var a=0; a<arr1.length; a++) {
        arr1[a] *= arr1[a];
        
        freqCount1[arr1[a]] = freqCount1[arr1[a]]+1 || 1
    }

    for(var b=0; b< arr2.length; b++)
        freqCount2[arr2[b]] = freqCount2[arr2[b]]+1 || 1

    for (var c in freqCount1) {
        if(freqCount1[c]!= freqCount2[c])
            return false;
           
    }
    console.log(freqCount1);
    console.log(freqCount2);
    return true;        
}

same([1,2,3,2], [9,1,6,4])
```
