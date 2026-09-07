// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

const isValidAnagram = (s,t) => {
    if (s.length !== t.length) return false
    let map = new Map()

    for (let char of s) {
        if (map.has(char)) {
            map.set(char, map.get(char) + 1)
        } else {
            map.set(char, 1)
        }
    }

    for(let char of t) {
        if (!map.has(char)) {
            return false
        }

        map.set(char, map.get(char) - 1)

        if (map.get(char) < 0) {
            return false
        }
    }

    return true
}

console.log(isValidAnagram("rat", "tar"))