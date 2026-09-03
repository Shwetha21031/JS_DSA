// Problem:
// Move every 0 to the end of the array while keeping the relative order of all non-zero elements.

// Example:

// Input:  [0,1,0,3,12]
// Output: [1,3,12,0,0,1]

// You must modify the array in-place.

// fast and slow pointers

const moveZeros = (arr) => {
    // let slow = 0
    // for(let fast=0; fast<arr.length; fast++){
    //     if(arr[fast]!=0){
    //         arr[slow]=arr[fast]
    //         slow++
    //     }
    // }
    // return arr.slice(0,slow)

    let slow=0;
    let fast=0;
    while(fast<arr.length){
        if(fast==0){
            [arr[slow],arr[fast]] = [arr[fast],arr[slow]]
            slow++
        }else{
            fast++
        }
    }
    return arr.slice(0,slow)
}

console.log(moveZeros([0,1,0,3,12,1]))

// Set slow = 0.
// Let fast iterate from 0 to arr.length - 1.
// If arr[fast] is not zero:
// Copy arr[fast] to arr[slow].
// Increment slow.
// After fast finishes, every non-zero element is at the beginning.
// Fill the remaining positions with 0.