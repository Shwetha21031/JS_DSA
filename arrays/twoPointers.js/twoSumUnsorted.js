// Approach:
// - left = 0
// - right = n - 1
// - Compare nums[left] + nums[right] with target
//
// Pointer movement:
// - sum < target → left++
// - sum > target → right--
// - sum === target → found
//
// Why?
// Since the array is sorted:
// - Moving left increases the sum
// - Moving right decreases the sum
//
// Time: O(n)
// Space: O(1)
//
// Edge cases:
// - No valid pair
// - Duplicate values

const twoSum = (arr, target) => {
    let left = 0
    let right = arr.length - 1
    while(left<right){
        let sum = arr[left]+arr[right]
        if(sum===target) return [left,right]
        if(sum>target){
            right--
        }else{
            left++
        }
    }
    return [-1,-1]
}

console.log(twoSum([1,2,3,4,5],4))