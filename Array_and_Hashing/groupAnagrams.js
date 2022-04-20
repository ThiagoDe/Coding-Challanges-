var groupAnagrams = function(strs) { // ["eat","tea","tan","ate","nat","bat"]
   const sortedStrs = strs.map(word => word.split('').sort().join(''));
   const hash = {};

   for (let i = 0; i < strs.length; i++){
       if (!hash[sortedStrs[i]]){
           hash[sortedStrs[i]] = [strs[i]];
       } else {
           hash[sortedStrs[i]].push(strs[i]);
       }
   }
   return Object.values(hash)
};




const strs = ["eat","tea","tan","ate","nat","bat"];
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(strs))