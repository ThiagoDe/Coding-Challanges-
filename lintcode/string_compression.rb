original_string = "aabcccccaaa"
# Output: "a2b1c5a3"

class Solution
  # @param original_string: a string
  # @return: a compressed string
  def compress(original_string)
    return original_string if original_string.length == 1

      result = []
      i = 0
      j = 0
      count = 0
      compresseble = false

      while i < original_string.length
      
        if original_string[i] == original_string[j]
          count += 1
          j += 1
        else
          result.push(original_string[i], count)
          i = j
          compresseble = true if count > 2
          count = 0
        end
      end
      return original_string if compresseble == false || result.length >= original_string.length 
      result.join('')
  end

end

p Solution.new.compress(original_string)