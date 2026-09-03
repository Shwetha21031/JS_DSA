const twoSum = (arr,target) => {
    let map = new Map()
    for(let i=0; i<arr.length; i++){
        let req = target-arr[i]
        if(map.has(req)){
            return[map.get(req),i]
        }else{
            map.set(arr[i],i)
        }
    }
    return [-1,-1]
}

console.log(twoSum([1,2,3,4],3))

// Algorithm
// Create an empty Map.
// Store each number as the key.
// Store its index as the value.
// Traverse the array with index i.

// For each number:

// required = target - nums[i]
// Check whether required already exists in the Map.
// If yes → return the stored index and current index.
// If no → store the current number and its index.
// If no pair exists, return [-1, -1].

// Complexity
// Time: O(n) — one pass through the array; Map lookup is average O(1).
// Space: O(n) — Map can store up to n elements.