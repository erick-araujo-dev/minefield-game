const createBoard = (rows: number, columns: number) => {
    return Array(rows).fill(0).map((_, row) => {
        return Array(columns).fill(0).map((_, column) => {
            return{
                row,
                column, 
                opened: false, 
                mined: false, 
                exploded: false,
                flagged: false,
                nearMines: 0
            }
        })
    })
}

const spreadMines = (board: any, minesAmount: number) => {
    const rows = board.length;
    const columns = board[0].length;
    let minesPlanted = 0;


    while (minesPlanted < minesAmount) {
        const rowSel = Math.floor(Math.random() * rows);
        const columnSel = Math.floor(Math.random() * columns);
        
        if(!board[rowSel][columnSel].mined){
            board[rowSel][columnSel].mined = true;
            minesPlanted++;
        }
    }
} 

const createMinedBoard = (rows: number, columns: number, minesAmount: number) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount)
    return board
}

export {createMinedBoard};