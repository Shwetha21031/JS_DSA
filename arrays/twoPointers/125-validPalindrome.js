// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.

const isValidPalindrome = (s) => {
    let res = s.match(/[a-zA-Z]/g)
    if(res===null || res.length==1){
        return true
    }
    let result = res.join("").toLowerCase();
    let right = result.length-1
    for(let left=0; left<right; left++){
        if(result[left]!==result[right]){ 
            return false}
        else{
            right--
        }
    }
    return true
}

console.log(isValidPalindrome("0p"))