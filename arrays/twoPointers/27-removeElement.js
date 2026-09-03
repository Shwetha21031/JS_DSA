// Given an array and a value val, remove every occurrence of val in-place.
// Example:
// Input:  nums = [3,2,2,3], val = 3
// Output: 2
// Array becomes: [2,2,...]
// Return the number of elements that are not equal to val.
// Pattern: Slow + Fast pointer

const removeElement = (arr, target) => {
    let slow = 0;

    for (let fast = 0; fast < arr.length; fast++) {
        if (arr[fast] !== target) {
            arr[slow] = arr[fast];
            slow++;
        }
    }

    return arr.slice(0, slow);
}

console.log(removeElement([3, 1, 2, 2, 3], 3));

// Initialize slow = 0.
// slow represents the next position where a valid element should be placed.
// Start fast = 0.
// fast scans every element in the array.
// For every arr[fast]:
// If arr[fast] === target → ignore it.
// If arr[fast] !== target:
// Copy it to arr[slow].
// Increment slow.
// At the end:
// slow equals the number of elements that are not the target.
// Return the first slow elements.