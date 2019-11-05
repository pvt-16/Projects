## Frequency counter problem

Problem: Given 2 array, check if the square of each value in array1 is present in array2. In case of repititions, check if the frequency is same too.

Naive solution: 
Nested loop. O(n^2).
Used javascript splice method to remove number from Array2 - for frequency calculation.

```
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        console.log(arr2);
        arr2.splice(correctIndex,1)
    }
    return true;
}

same([1,2,3,2], [9,1,4,4])
```

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

Problem: Check if 2 strings are anagrams

```
function validAnagram(word1, word2) {
  if(word1.length != word2.length)
        return false;
          
var freqCounter1={}, freqCounter2={};
// Build freq counter for first input
    for(var c of word1) {
        freqCounter1[c] = (freqCounter1[c] || 0 ) +1 
    }

    for(var c of word2) {
        if(!freqCounter1[c])
            return false;
         freqCounter1[c] = freqCounter1[c] - 1 
    }
    
    for( var s in freqCounter1)
        if( freqCounter1[s] != freqCounter2[s])
            return false;
    
    return true;
} 

validAnagram('aaz','azz');
```

Instead of creating a new variable and space for 2nd, we use the same to compare the individual characters in both (presence/absence) and for tracking frequency, we subtract from the counter at every occurence. 

## Multiple pointers problem
