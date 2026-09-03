// Problem:
// Given a sorted array that may contain negative numbers, return an array containing the squares of each number, also sorted.

// Example:

// Input:  [-4,-1,0,3,10]
// Output: [0,1,9,16,100]

// A simple solution is to square everything and sort it, but the goal is to solve it in O(n).

const squareOfSorted = (arr) => {
    let right=arr.length-1
    let left=0
    let res = []
    for(let i=arr.length-1; i>=0; i--){
        if(Math.abs(arr[right])>Math.abs(arr[left])){
            res[i] = arr[right]*arr[right]
            right--
        }else{
            res[i] = arr[left]*arr[left]
            left++
        }
    }
    return res
}

console.log(squareOfSorted([-4,-1,0,3,10]))


// Algorithm

// Set:

// left = 0
// right = arr.length - 1
// Create an empty result array.
// Start filling result from right to left.

// Compare:

// Math.abs(arr[left])

// with:

// Math.abs(arr[right])
// Whichever has the larger absolute value produces the larger square.
// Put that square at result[i].
// Move the corresponding pointer inward.
// Continue until all elements are processed.


// Complexity
// Time: O(n)
// Space: O(n) — result array
// Sorting: Not required
// Pointer operations: O(1)