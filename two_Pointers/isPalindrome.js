var isPalindrome = function(s) {
    if (s.length <= 1) return true;
    const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // const result = [];
    // const edited = s.split('').forEach( char => {
    //     if (alpha.includes(char)) result.push(char.toLowerCase());
    // })
    // const result.join('') === result.reverse().join('')
    let i = 0;
    let j = s.length - 1;

    while (i <= j){
        let char1 = s[i].toLowerCase();
        let charEnd = s[j].toLowerCase();
        console.log(char1, charEnd)

        if (!alpha.includes(char1)){
            i++;
            continue;
        } else if (!alpha.includes(charEnd)){
            j--;
            continue;
        } 
        if (char1 !== charEnd) return false;
        i++;
        j--;
    }

    return true;
};

const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s));
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// const s1 = "race a car";
// console.log(isPalindrome(s1));
// Output: false
// Explanation: "raceacar" is not a palindrome.