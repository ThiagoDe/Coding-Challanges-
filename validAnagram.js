

var isAnagram = function(s, t) {
  let lettersS = {}
  
  s.split('').forEach(char => {
    !lettersS[char] ? lettersS[char] = 1 : lettersS[char] += 1
  })
    
  t.split('').forEach(char => {
    !lettersS[char] ? lettersS[char] = 1 : lettersS[char] -= 1
  });
  console.log(lettersS)
  console.log(Object.values(lettersS))
  return Object.values(lettersS).every(e => e === 0)
}

console.log(isAnagram("rat","car"))