var spiralOrder = function(matrix) {
    
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1; // bound

    const result = [];
    const size = matrix.length * matrix[0].length;
    while (result.length < size){
        for (let i = left; i <= right && result.length < size; i++){
            result.push(matrix[top][i]) //when you reach the and of the row is fishied;
        }
        top++; //increment the top to check the next row

        for (let i = top; i <= bottom && result.length < size; i++){
            result.push(matrix[i][right])
        }
        right--;

        for (let i = right; i >= left && result.length < size; i--){
            result.push(matrix[bottom][i])
        }
        bottom--;

        for (let i = bottom; i >= top && result.length < size; i--){
            result.push(matrix[i][left])
        }
        left++
    }

   
    return result;
};
const matrix = [[1,2,3]
               ,[4,5,6],
                [7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder(matrix))