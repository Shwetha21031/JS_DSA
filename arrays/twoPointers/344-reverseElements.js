const reverseElems = (s) => {
    let right = s.length-1
    for(let left=0; left<right/2; left++){
        [s[right],s[left]] = [s[left],s[right]]
        right--
    }
    return s
}
console.log(reverseElems([1,2,3,4,5,6]))

// Use two pointers opposite dir:

// left  → starts at beginning
// right → starts at end

// Initialize:
// left = 0
// right = arr.length - 1
// While left < right:
// Swap arr[left] and arr[right].
// Move left forward.
// Move right backward.
// Return the array.


// Time: O(n) — each element is processed at most once.
// Space: O(1) — reversal happens in-place.
// Number of swaps: ⌊n / 2⌋
// Array access: O(1)
// Swap: O(1)