// Given strings s and t, determine whether s is a subsequence of t.
// A subsequence maintains the original order but does not need to be contiguous.

// Example:
s = "axc"
t = "ahbgdc"
// Output: true

// Because:
// a h b g d c
// ↑   ↑       ↑
// a   b       c

const subsequent = (s,t) => {
    let a=0;
    for(let b=0; b<t.length; b++){
        if(s[a]==t[b]){
            a++
        }
    }
    return a==s.length
}

console.log(subsequent(s,t))
