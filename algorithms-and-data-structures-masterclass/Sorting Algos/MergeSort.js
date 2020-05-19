//MergeSort.js

//Divide and Conquer approach
//Recursive functions

//Space Complexity - O(n) - It takes up memory equivalent to n while calling recursive functions
//Time Complexity - O(n logn) 
//As length increases, number of splits needed to reach base level increases logarithmically. Eg: log 32 = log 2*5 = 5
// logn gives number of decompositions and n is for number of comparisons per decomposition

var a = [8,7,6,5,4,3,2,1];

function MergeSort(subArr) {
    
    if (subArr.length == 1)
        return subArr;
    var mid = Math.floor ( subArr.length /2)
    return SortedMergeArrays(MergeSort(subArr.slice(0,mid)), MergeSort(subArr.slice(mid)));
}

//[4,8] [3,5]
function SortedMergeArrays(subArr1, subArr2) {
    var mergedArray = new Array();
    var i=0, j=0;
        
    while(i< subArr1.length && j<subArr2.length) {
        while (subArr1 [i] < subArr2[j]) {
            mergedArray.push(subArr1[i]);
            i++;
        }
        while (subArr1[i]> subArr2[j]) {
            mergedArray.push(subArr2[j]);
            j++;
        }
    }
    if ( i< subArr1.length)
        mergedArray = [...mergedArray, ...subArr1.slice(i, subArr1.length)];
    else if (j < subArr2.length)
        mergedArray = [...mergedArray, ...subArr2.slice(j, subArr2.length)];
    //console.log(mergedArray);
    return mergedArray;
}

console.log(MergeSort(a));