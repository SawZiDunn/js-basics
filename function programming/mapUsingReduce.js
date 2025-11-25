let arr = [1, 2, 3, 4];

function mapUsingReduce(arr, fn) {
    return arr.reduce(
        (prevArr, currentVal) => [...prevArr, fn(currentVal)],
        []
    );
}

console.log(mapUsingReduce(arr, (x) => x * x));
