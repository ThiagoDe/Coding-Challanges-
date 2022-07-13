# inputString = "abbcabb"
# inputString = "aabb"
inputString = "zaa"

def solution(inputString)
    arr = inputString.split('')
    chars = {}

    arr.each do |c|
        chars[c] = 0 if !chars[c]
        chars[c] += 1
    end

    vals = chars.values

    if inputString.length.odd?
        return vals.select { |x| x == 1 }.length == 1
    else
        return vals.all? { |x| x.even? }
    end
end

p solution(str)
