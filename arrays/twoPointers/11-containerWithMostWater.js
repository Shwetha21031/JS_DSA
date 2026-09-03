// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

const containerWithMostWater = (arr) => {
    // let left=0;
    // let right=arr.length-1;
    // let maxWater = 0
    // while(left<right){
    //     let waterContent = Math.abs(Math.min(arr[left],arr[right])*(right-left))
    //     maxWater = Math.max(maxWater, waterContent)
    //     if(arr[left]<arr[right]){
    //         left++
    //     }else{
    //         right--
    //     }
    // }
    // return maxWater
    while(start<end){
        max = Math.max(max, Math.min(arr[start],arr[end])*(end-start))
        if(arr[start]<=arr[end]) start++;
        else end--;
    }
    return max
}

console.log(containerWithMostWater([1,2,3,1000,9]))