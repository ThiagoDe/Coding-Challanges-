a = [-1, 150, 190, 170, -1, -1, 160, 180]
#   [-1, 150, 170, 190, -1, -1, 160, 180]
#              i    j
# Expected Output:
# [-1, 150, 160, 170, -1, -1, 180, 190]

def solution(a)

    sorted = false
    while !sorted 
    i = 0
    j = 1

    sorted = true
    while i < a.length - 1
        if a[i] == -1
            i += 1
            j = i + 1
        elsif a[j] == -1
            j += 1
        elsif a[i] > a[j]
            left = a[i]
            right = a[j]
            a[i] = right
            a[j] = left 
            sorted = false 
            i = j
            j = i + 1
        else
            i += 1
            j = i + 1
        end
    end
end
    return a 
end

p solution(a)