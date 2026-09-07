// Given a string s, find the length of the longest substring without duplicate characters.
// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

const longestSubString = (s) => {
    let start=0, end=0;
    let max=0;
    let set = new Set()
    
    for(end;end<s.length;end++){
        while(set.has(s[end])){
            set.delete(s[start])
            start++
        }
        set.add(s[end])

        max=Math.max(max, end - start + 1);
    }
    return max
}

console.log(longestSubString("pwwkew"))