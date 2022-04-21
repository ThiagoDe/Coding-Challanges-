var isValidSudoku = function(board) {
    
    const set = new Set();
    for (let i = 0; i < board.length; i ++){
        for (let j = 0; j < board[i].length; j ++){
            const cell = board[i][j];
            if (cell === '.') continue;
            const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
            
            const row = `row: ${i} value ${cell}`;
            const col = `col: ${j} value ${cell}`;
            const box = `boxNum ${boxNum} value ${cell}`;
            console.log(box);
            if (set.has(row) || set.has(col) || set.has(box)) return false;
            set.add(row);
            set.add(col);
            set.add(box);

        }
    }


    return true;
};

const board = 
[["5","3",".",".","7",".",".",".","."]
,["6","3",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
// Output: true
console.log(isValidSudoku(board));