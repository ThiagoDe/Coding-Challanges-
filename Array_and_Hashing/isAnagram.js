var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    let anagram = {};
    
    for (let i = 0; i < s.length; i++){
        if (!(s[i] in anagram)) anagram[s[i]] = 0;
        if (!(t[i] in anagram)) anagram[t[i]] = 0;
        anagram[s[i]] += 1;
        anagram[t[i]] -= 1;
    }
    
    return Object.values(anagram).every((el) => el === 0)
}