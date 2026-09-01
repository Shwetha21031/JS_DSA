// 3SUM — SORTED ARRAY

// Pattern:
// Two Pointers

// Trigger:
// Sorted array + find 3 elements matching target

// Approach:
// Fix i
// ↓
// left = i + 1
// right = n - 1
// ↓
// Use two pointers for remaining 2 elements

// Pointer movement:
// sum < target → left++
// sum > target → right--
// sum === target → found

// Invariant:
// i < left < right

// Time:
// O(n²)

// Space:
// O(1)

const threeSum = (arr, target) => {
    let left = 1;
    let right = arr.length-1
    for(let i=0; i<arr.length; i++){
        while(left<right){
            let sum = arr[i]+arr[left]+arr[right]
            console
            if(sum===target) return [i,left,right]
            else if (sum>target){
                right--
            }else{
                left++
            }
        }
    }
    return [-1,-1,-1]
}

console.log(threeSum([1,2,3,4,5,6],9))