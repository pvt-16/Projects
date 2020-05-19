//InsertionSort.js

// Places an element in it's relative right place in a sorted array.
// the start of the array is gradually built up sorted

//Time Complexity - O(n^n)
//Almost sorted data O(n). Best case.
//var a = [0,2,34,22,10,19,17];

var a = [7,6,5,4,3,2,1].reverse();
a[7]=-1;
console.log(a);
function InsertionSort() {
    var count=0;
    for (var i=1; i< a.length; i++) {
        var temp = a[i],  j=i-1, swap= false;
            while ( a[j]> temp) {
                a[j+1] = a[j];
                j--;
                swap = true;
            }
            if (swap) {
                a[j+1] = temp;
                count++;
            }
        }
    console.log("Number of swaps: " + count);
    console.log("Array: " + a);
}

var startTime = Date.now();
InsertionSort();
console.log("Time Taken: " + (Date.now() - startTime)/ 60);