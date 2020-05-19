//BubbleSort.js

//Values bubble up to the top.
//If noSwap = true => from arr[i] to arr[last], everything in sorted. No need for i++. Everything sorted. Break;

//Time Complexity - O(n^n)
//For nearly sorted data, then with noSwap optimization, it can be O(n). Best case.

var arr = [7,6,5,4,3,2,1];
//var arr = [0,2,34,22,10,19,17];
//var arr = [4,3,1,2]

console.log(arr);
function BubbleSort() {
    var count=0, here = 0, noswap;
    for (var i=0; i< arr.length; i++) {
        console.log(arr);
        for (var j=0; j< arr.length-i-1; j++) {
            here++;
            noswap = true;
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
                count++;
                noswap = false;
            }
        }
        if (noswap)
            break;
    }
console.log("Number of swaps: " + count);
console.log("Array: " + arr);
console.log("Number of here: " + here);
}

var startTime = Date.now();
BubbleSort();
console.log("Time Taken: " + (Date.now() - startTime)/ 60);