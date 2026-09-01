// 4SUM — SORTED ARRAY

// Pattern:
// K-Sum / Two Pointers

// Trigger:
// Sorted array + find 4 elements matching target

// Approach:
// Fix i
//     ↓
// Fix j
//     ↓
// Two pointers for remaining 2

// i < j < left < right

// Pointer movement:
// sum < target → left++
// sum > target → right--
// sum === target → found

// Time:
// O(n³)

// Space:
// O(1)


const fourSum = (arr,target) => {
    let left = 2;
    let right = arr.length-1
    for(let i=0; i<arr.length; i++){
        for(let j=1; j<arr.length; j++){
            while(left<right){
                let sum = arr[i]+arr[j]+arr[left]+arr[right]
                if(sum===target) return [i,j,left,right]
                if(sum<target){
                    left++
                }else{
                    right--
                }
            }
        }
    }
    return [-1,-1,-1,-1]
}

console.log(fourSum([1,2,3,4,5,6,7,8,9],14))