s = "foo(bar(baz))blim"
# solution(s) = "foobazrabblim".

def solution(s)
    stack = []
    word = ''
    s.each_char do |c|
        if c == '('
            stack.push(word)
            word = ''
        elsif c == ')'
            word = stack.pop + word.reverse
        else
            word += c 
        end
    end

    return word
end

p solution(s)