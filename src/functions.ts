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

export const createMinedBoard = (rows: number, columns: number, minesAmount: number) => {
    const board = createBoard(rows, columns);
    spreadMines(board, minesAmount)
    return board
}

export const cloneBoard = (board: any) => {
    return board.map(rows => {
        return rows.map(field => {
            return {...field}
        })
    })
}

const getNeighbors = (board: any, row: number, column: number) => {
    const neighbors = []
    const rows = [row - 1, row, row + 1]
    const columns = [column - 1, column, column + 1]
    rows.forEach(r => {
        columns.forEach(c => {
            const different = r !== row || c !== column;
            const validRow = r >= 0 && r < board.length
            const  validColumn = c >= 0 && c < board[0].length
            if(different && validColumn && validRow){
                neighbors.push(board[r][c])
            }
        })
    })
    return neighbors;
}

const safeNeighborsHood = (board: any, row: number, column: number) => {
    const safes = (result: boolean, neigbor: any) => result && !neigbor.mined;
    return getNeighbors(board, row, column).reduce(safes, true)
}

export const openField = (board: any, row: number, column: number) => {
    const field = board[row][column]
    if(!field.opened){
        field.opened = true;
        if(field.mined){
            field.exploded = true;
        } else if(safeNeighborsHood(board, row, column)){
            getNeighbors(board, row, column)
            .forEach(n => openField(board, n.row, n.column))
        } else {
            const neighbors = getNeighbors(board, row, column);
            field.nearMines = neighbors.filter(n => n.mined).length
        }
    }
}

const fields = (board: any) => [].concat(...board)

export const hadExplosion = (board: any) => fields(board).filter(field => field.exploded).length > 0

const pendding = (field: any) => (field.mined && !field.flagged) || (!field.mined && !field.opened)

export const wonGame = (board: any) => fields(board).filter(pendding).length === 0

export const showMines = (board: any) => fields(board).filter(field  => field.mined). forEach(field => field.opened = true)

