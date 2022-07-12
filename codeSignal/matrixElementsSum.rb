require 'set'

matrix = [[1, 1, 1, 0], 
          [0, 5, 0, 1], 
          [2, 1, 3, 10]]

def solution(matrix)
    total = 0
    col = Set.new 

    (0...matrix.length).each do |r|
        (0...matrix[0].length).each do |c|
            if matrix[r][c] != 0 && !col.include?(c)
                total += matrix[r][c]
            elsif matrix[r][c] == 0
                col.add(c)
            end
        end
    end
    return total
end

p solution(matrix)