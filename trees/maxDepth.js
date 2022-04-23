const maxDepth = (root, l = 0) => {
    if (root === null) return 0 
    const left = 1 + maxDepth(root.left, l + 1);
    const right = 1 + maxDepth(root.right, l + 1);
    return Math.max(left, right);
}