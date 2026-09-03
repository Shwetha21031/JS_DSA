// Given a sorted integer array, remove the duplicate values in-place so that every unique value appears only once.

// Example:

// Input:  [1,1,2,2,3]
// Output: [1,2,3]

// You don't need to actually delete elements from the array. Return the number of unique elements.

// Pattern: Slow + Fast pointer
// Key idea: One pointer finds elements, another tracks where the next unique element should go.

const removeDuplicates = (arr) => {
    let slow = 0
    for(let fast=1; fast<arr.length; fast++){
        if(arr[slow]!=arr[fast]){
            arr[slow+1] = arr[fast]
            slow++
        }
    }

    return arr.slice(0,slow+1)
}

console.log(removeDuplicates([1,1,2,3,3,4,5,5,5,6,7]))

// Algorithm
// Start slow = 0.
// Start fast = 1.
// Compare arr[slow] with arr[fast].
// If they are equal:
// Duplicate found.
// Only move fast.
// If they are different:
// New unique element found.
// Move slow forward.
// Copy arr[fast] into arr[slow].
// Return the portion from 0 through slow.