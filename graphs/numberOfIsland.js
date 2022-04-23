var numIslands = function(grid) {
    const visited = new Set();
    let totalIslands = 0
    for (let i = 0; i < grid.length; i++){
        for (let j = 0; j < grid[0].length; j++){
            if (explore(grid, i, j, visited)) totalIslands += 1;
        }
    }

    return totalIslands;
};

const explore = (grid, r, c, visited) => {
    let pos = r + ',' +  c;
    const rInbounds = r >= 0 && r < grid.length;
    const cInbounds = c >= 0 && r < grid[0].length;

    if (!rInbounds && !cInbounds) return false;
    if (grid[r][c] === '0') return false;
    if (visited.has(pos)) return false;
    visited.add(pos);

    explore(grid, r + 1, c, visited);
    explore(grid, r - 1, c, visited);
    explore(grid, r , c + 1, visited);
    explore(grid, r , c - 1, visited);

    return true;
}