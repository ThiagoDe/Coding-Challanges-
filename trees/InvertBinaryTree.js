const inverTree = (root) => {
    if (root === null) return null;
    const left = root.left;
    const right = root.right;
    root.left = inverTree(right);
    root.right = inverTree(left);
}