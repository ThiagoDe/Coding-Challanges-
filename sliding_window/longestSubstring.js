var lengthOfLongestSubstring = function(s) {
    // if (s.length === 1)
    // let longest = 0;
    // let current = 0;
    // let set = new Set();

    // for (let i = 0; i < s.length; i++){
    //     if (s[i] === s[i - 1]) {
    //         current = 0;
    //         continue;
    //     }
    //     if (set.has(s[i])) {
    //         set.delete(s[i]);
    //         //  i += 1;
    //          longest = Math.max(longest, current);
    //          current = 1;
    //     } else {
    //         set.add(s[i]);
    //         current += 1;
    //         longest = Math.max(longest, current);
    //         console.log(set)
    //         console.log(current, 'current')
    //     }
    // }

    // return longest;

    let longest = 0;
    let current = 0;
    let set = new Set();

    for (let i = 0; i < s.length; i++){ // "pwwkew"
        if (!(set.has(s[i]))){
            set.add(s[i]);
            current += 1;
            longest = Math.max(longest, current)
        } else {
            longest = Math.max(longest, current);
            // set.delete(s[i]);
            current = longest;
        }
    }

    return longest;
};

// const s = "aab"
// const s = "abcabcbb"
// const s = "bbbbb"
const s = "pwwkew"
// const s = "dvdf"


// Output: 3
// Explanation: The answer is "abc", with the length of 3.

console.log(lengthOfLongestSubstring(s));
