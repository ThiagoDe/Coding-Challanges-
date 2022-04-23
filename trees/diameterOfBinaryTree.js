const diameterOfBinaryTree = (root) => {
    if (root === null) return 0;
    let max = 0;
    
const dfs = (root) => {
    if (root === null) return 0;
    let left = dfs(root.left);
    let right = dfs(root.right);
    
    max = Math.max(left + right, max);

    return Math.max(left, right) + 1;
    }
    dfs(root);
    return max;
}