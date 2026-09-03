// You have people with different weights. Each boat can carry at most two people and has a maximum weight limit.

// Find the minimum number of boats required.

// Example:

// people = [3,2,2,1]
// limit = 3

// Output: 3

// Possible arrangement:

// [1,2] → boat
// [2]   → boat
// [3]   → boat

const boatsToSave = (arr) => {
    let sorted = arr.sort((a,b)=>a-b)
    let left=0;
    let boats = 0;
    for(let right=sorted.length-1; right>=left; right--){
        if((sorted[left]+sorted[right])<=3){
            left++
        }
        boats++;
    }
    return boats
}

console.log(boatsToSave([3,2,2,1]))