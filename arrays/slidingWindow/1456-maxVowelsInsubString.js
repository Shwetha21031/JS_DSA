// LeetCode 1456 — Maximum Number of Vowels in a Substring of Given Length

// Given a string and an integer k, find the maximum number of vowels in any substring of length k.

// Example:

let s = "abciiidef", k = 3

// Output: 3

// Because:

// "iii"

// contains 3 vowels.

const maxVowels = (s,k) => {
    let i = 0;
    let totalVowels = 0
    const vowels = ['a','e','i','o','u']
    while(i<k){
        if(isVowel(s[i])) totalVowels++
        i++
    }
    let max = totalVowels

    for(let end=k; end<s.length; end++){
        let start=end-k
        if(isVowel(s[start])){
             totalVowels--
        }
        if(isVowel(s[end])){
             totalVowels++
        }
        max = Math.max(max, totalVowels)
    }

    return max
}

function isVowel(l) {
    return 'a' === l || 'e' === l || 'i' === l || 'o' === l || 'u' === l
}


console.log(maxVowels(s,k))