function quickSort(arr) {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = arr.slice(0, -1).filter(x => x <= pivot);
    const right = arr.slice(0, -1).filter(x => x > pivot);

    return [...quickSort(left), pivot, ...quickSort(right)];
}

const array = [34, 7, 23, 32, 5, 62];
console.log("Original:", array);
console.log("Sorted:  ", quickSort(array));
