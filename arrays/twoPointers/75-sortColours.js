// Problem:
// An array contains only:

// 0, 1, 2

// Sort the array in-place without using a normal sorting algorithm.

// Example:

// Input:  [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Pattern: Three pointers

// low    mid          high
//  ↓      ↓            ↓
// [0, 0 | 1, 1, 1 | 2, 2]

// This is commonly called the Dutch National Flag problem.

const dutchFlag = (arr) => {
    // let newArr = []
    // let left=0;
    // let right=arr.length-1;
    // for(let i=0;i<arr.length; i++){
    //     if(arr[i]==2){
    //         newArr[right]=2
    //         right--
    //     }else if(arr[i]==0){
    //         newArr[left]=0;
    //         left++
    //     }
    // }

    // return newArr.fill(1,left,right+1)

    let low=0;
    let mid=0;
    let high=arr.length-1;
    while(mid<=high){
        if(arr[mid]==0){
            [arr[low],arr[mid]] =  [arr[mid],arr[low]]
            low++
            mid++
        }else if(arr[mid]==1){
            mid++
        }else{
            [arr[high],arr[mid]] =  [arr[mid],arr[high]]
            high--
        }
    }
    return arr
}

console.log(dutchFlag([2,0,2,1,1,0]))