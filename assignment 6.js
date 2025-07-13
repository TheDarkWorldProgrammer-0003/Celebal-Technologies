function first(arr, n) {
    // If n is undefined, default to 1
    if (n === undefined) {
        n = 1;
    }
    // Return the first n elements of the array
    return arr.slice(0, n < 0 ? 0 : n);
}

// // Test Data
// console.log(first([7, 9, 0, -2]));    // Output: [7]
// console.log(first([], 3));             // Output: []
// console.log(first([7, 9, 0, -2], 3));  // Output: [7, 9, 0]
// console.log(first([7, 9, 0, -2], 6));  // Output: [7, 9, 0, -2]
// console.log(first([7, 9, 0, -2], -3)); // Output: []
