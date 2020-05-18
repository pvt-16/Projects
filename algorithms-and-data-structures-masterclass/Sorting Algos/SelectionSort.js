//SelectionSort.js

//Smaller values get placed first.
//Iterate through array. Find smallest, swap with expected position. Swap only with the minimum one and no repeated swaps.

SelectionSort();

function SelectionSort() {
    var arr = [7,6,5,4,3,2,1];
    var minValue, minPosition=-1, count=0;

    for (var i=0; i< arr.length; i++) {
        minValue = arr[i], minPosition=-1;
        for (var j=i+1; j< arr.length; j++) {
            if (arr[j] < minValue) {
                minValue = arr[j]; minPosition = j;
            }
        }

        if (minPosition>=0) {
            count++;
            [arr[i], arr[minPosition]] = [arr[minPosition], arr[i]];
        }
    }
    
    console.log("Number of swaps: " + count);
    console.log("Array: " + arr);
    //console.log("Number of here: " + here);
}