var isSubtree = function(root, subRoot) {
    if (isSame(root, subRoot)) return true;
    if (root === null) return false
    if (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)) return true
    return false
};

const isSame = (n1, n2) => {
    if (!n1 && !n2) return true;
    if (!n1 || !n2 || n1.val !== n2.val) return false;
    return isSame(n1.left, n2.left) && isSame(n1.right, n2.right);
}

