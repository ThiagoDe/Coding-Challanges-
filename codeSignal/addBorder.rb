# picture = ["abc", "ded"]
picture = ["a"]
# Expected Output:
# ["*****", 
#  "*abc*", 
#  "*ded*", 
#  "*****"]

def solution(picture)
    array = []
    num = picture[0].length + 2
    border = ''

    num.times { border += '*'}

    if picture.length === 1
        str = "*" + picture[0] + "*"
        return [border, str, border]
    end
    
    (0...picture.length).each do |n|
        if n === 0
            array.push(border)
            array.push("*" + picture[n] + "*")
        elsif n === picture.length - 1
            array.push("*" + picture[n] + "*")
            array.push(border)
        else
            array.push("*" + picture[n] + "*")
        end
    end
    return array
end

p solution(picture)