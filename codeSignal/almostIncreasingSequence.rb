# Not finished 

# sequence = [1, 2, 5, 3, 5] # true
# sequence = [10, 1, 2, 3, 4, 5, 6, 1] # false
# sequence = [3, 6, 5, 8, 10, 20, 15] # false
sequence = [ 2, 3, 4, 5, 6, 1] # true
sequence = [1, 2, 1, 2] # false

def solution(sequence)
    i = 0
    j = 1
    delete_one = true
    prev_i = - Float::INFINITY

    while i < sequence.length - 1 
       if sequence[i] >= sequence[j] && delete_one
            delete_one = false 
            if prev_i < sequence[i]
                prev_i = sequence[i]
            else 
                return false
            end
            i += 1
            j = i + 1
       elsif  sequence[i] >= sequence[j] && !delete_one
            return false 
       else 
            i += 1
            j = i + 1
       end
    end
    return true
end

p solution(sequence)