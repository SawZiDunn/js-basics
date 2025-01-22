function binarySearch(myArray, toFind, start, end) {
    mid = Math.floor((start + end) / 2);

    if (start >= end) {
        return false;
    } else {
        if (myArray[mid] === toFind) {
            return true;
        } else if (myArray[mid] < toFind) {
            return binarySearch(myArray, toFind, mid + 1, end);
        } else if (myArray[mid] > toFind) {
            return binarySearch(myArray, toFind, start, mid - 1);
        }
    }
}

let Array = [1, 3, 4, 6, 7, 9, 15, 18, 19, 25, 28, 39, 48, 52, 67, 78];
let toFind = 25;
if (binarySearch(Array, toFind, 0, Array.length - 1)) {
    console.log("We found");
} else {
    console.log("It's not there.");
}
