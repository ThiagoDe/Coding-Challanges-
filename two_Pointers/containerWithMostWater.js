const height = [1,8,6,2,5,4,8,3,7]
// Output: 49
const maxArea = (height) => {
    let l = 0
    let r = height.length - 1
    let area
    let res = 0

    while (l < r) {
        let min = Math.min(height[l], height[r]);
        area = (r - l) * min;
        res = Math.max(area, res)
        if (height[l] < height[r]){
            l += 1;
        } else {
            r -= 1;
        }
    }
    return res;
};

console.log(maxArea(height))