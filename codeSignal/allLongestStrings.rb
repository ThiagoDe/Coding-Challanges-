# inputArray = ["aba", "aa", "ad", "vcd", "aba"]
inputArray = ["abc", "eeee", "abcd", "dcd"]

def solution(inputArray)
    len = {}
    # max = 0

    inputArray.each do |str|
        len[str.length] = [] if !len[str.length]
        len[str.length].push(str)      
    end
    max = len.keys.sort[-1]
    return len[max]
end

p solution(inputArray)