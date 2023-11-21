class GameBoard {
    constructor() {
        this.board = this.createBoard();
        this.missedHits = [];
    }

    createBoard() {
        const outerArray = [];
        for(let i = 0; i < 10; i++) {
            const innerArray = [];
            for(let j = 0; j < 10; j++) {
                innerArray.push({ name: undefined, index: undefined })
            }
            outerArray.push(innerArray)
        }
        return outerArray;
    }

    getBoard() {
        return this.board;
    }

    isCoordsValid(length, x, y) {
        if(x > 10 || y > 10 || x < 0 || y < 0)
            return false;
        else {
            for(let i = y; i < y + length; i++) {
                if(this.board[i][x].name !== undefined)
                    return false;
            }
            return true;
        }
    }

    setShip(ship, x, y) {
        if(this.isCoordsValid(ship.length, x, y)) {
            for(let i = 0; i < ship.length; i++) {
                this.board[y+i][x].name = ship;
                this.board[y+i][x].index = i;
            }
        }
    }

    receiveAttack(x, y) {
        if(this.board[y][x].name === undefined)
            this.missedHits.push({ x: x, y: y});
        else
            this.board[y][x].name.hit(this.board[y][x].index);
    }

    allShipsSunk() {
        let sunk = true;
        this.board.forEach((outerElement) => {
            outerElement.forEach((innerElement) => {
                if(innerElement.name) {
                    if(!innerElement.name.isSunk())
                        sunk = false;
                }        
            });
        });
        return sunk;
    }
}

module.exports = GameBoard;