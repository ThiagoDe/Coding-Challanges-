var searchMatrix = function(matrix, target) {
  let flat = matrix.flat();
  return bSearch(flat, target);
};

const bSearch = (arr, target) => {
    if (arr.length < 1) return false;

    let mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) return true;

    if (arr[mid] > target) {
        return bSearch(arr.slice(0, mid), target);
    } else {
        return bSearch(arr.slice(mid + 1), target)
    }
}

const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
// target = 3
// Output: true
console.log(searchMatrix(matrix, 35));