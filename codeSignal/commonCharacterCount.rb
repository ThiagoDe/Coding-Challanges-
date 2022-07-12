s1 = "aabcc"
s2 = "adcaa"

def solution(s1, s2)
    hash = {}
    total = 0

    s1.each_char do |char|
        hash[char] = 0 if !hash[char]
        hash[char] += 1
    end

    s2.each_char do |char|
        if hash[char] && hash[char] > 0
            total += 1
            hash[char] -= 1
        end
    end

    return total
end

p solution(s1, s2)