const containsDuplicate = (arr) => {
    let unique = new Set()
    for(let i=0; i<arr.length; i++){
        if(unique.has(arr[i])){
            return arr[i]
        }else{
            unique.add(arr[i])
        }
    }
    return false
}

console.log(containsDuplicate([1,2,3,4,5,6,6]))