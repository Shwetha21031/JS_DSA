// Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

const noOfSubArry = (arr, k, threshold) => {
    let subArray = 0
    let sum = 0
    let i=0
    while(i<k){
        sum+=arr[i]
        i++
    }
    subArray = ((sum/k)>=threshold) ? 1 : 0

    for(let end=k; end<arr.length; end++){
        let start=end-k
        sum-=arr[start]
        sum+=arr[end]

        if((sum/k)>=threshold) subArray++
    }

    return subArray
}

console.log(noOfSubArry([2,2,2,2,5,5,5,8],3,4))