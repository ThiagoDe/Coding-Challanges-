var lengthOfLongestSubstring = function(s) {
    // if (s.length === 1)
    let longest = 0;
    let current = 0;
    let set = new Set();

    for (let i = 0; i < s.length; i++){
        if (set.has(s[i])) {
            set.delete(s[i]);
            //  i += 1;
             longest = Math.max(longest, current);
             current = 1;
        } else {
            set.add(s[i]);
            current += 1;
            longest = Math.max(longest, current);
            console.log(current, 'current')
        }
    }

    return longest;
};

const s = "aab"
// const s = "abcabcbb"

// Output: 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring(s));
