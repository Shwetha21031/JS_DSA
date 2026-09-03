// Given an integer array and an integer k, find the contiguous subarray of length exactly k that has the maximum average.

// Example:

let nums = [1,12,-5,-6,50,3]
let k = 4

// Output: 12.75

// The best window is:

// [12,-5,-6,50]

// Pattern: Fixed-size sliding window

const maxAvg = (nums, k) => {
    let sum = 0;
    let i = 0;
    while(i<k){
        sum+=nums[i]
        i++
    }
    let maxAvg = sum/k

    for(let end=k; end<nums.length; end++){
        let start=end-k
        sum-=nums[start]
        sum+=nums[end]

        maxAvg = Math.max(maxAvg, sum/k)
    }
    return maxAvg

}

console.log(maxAvg(nums, k))