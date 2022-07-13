# a = [1, 2, 1, 2, 2, 1]
# #    i
# b = [2, 2, 1, 1, 2, 1]
# a = [1, 2, 2]
# b = [2, 1, 1]
# a = [1, 2, 1, 2]
# b = [2, 2, 1, 1]
# a = [1, 2, 2]
# b = [2, 1, 1]
a = [1, 1, 4]
b = [1, 2, 3]

def solution(a, b)
    swap = true
    i = 0
    j = 1

    while i < a.length && j < a.length
        if a[i] != b[i] && a[j] != b[j]
           if a[i] == b[j] && a[j] == b[i]
            return false if !swap
            val = a[i]
            val2 = a[j]
            a[i] = val2 
            a[j] = val 
            swap = false
            i += 1
            j = i + 1
           else
            return false
            # return true if a == b
           end
        elsif a[i] != b[i] && a[j] == b[j]
            j += 1
        elsif a[i] == b[i]
            i += 1
            j = i + 1
        end
        
    end

    return a == b  
end

p solution(a, b)