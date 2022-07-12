a = [50, 60, 60, 45, 70]
# solution(a) = [180, 105]

def solution(a)
    team1 = 0
    team2 = 0
    (0...a.length).each do |n|
        if n.even?
            team1 += a[n]
        else
            team2 += a[n]
        end
    end
    return [team1, team2]
end

p solution(a)