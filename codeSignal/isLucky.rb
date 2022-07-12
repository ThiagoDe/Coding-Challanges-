n = 134008

def solution(n)
    half_left = 0
    half_right = 0

    str = n.to_s
    mid = str.length / 2
    left = str[0...mid]
    right = str[mid..-1]
    
    left.each_char do |l|
        half_left += l.to_i
    end

    right.each_char do |l|
        half_right += l.to_i
    end

    return half_left == half_right
end

p solution(n)