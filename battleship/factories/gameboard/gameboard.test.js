const Ship = require('../ship/ship.js');
const GameBoard = require('./gameboard.js');

describe('GameBoard()', () => {
    let gameboard, ship;

    beforeEach(() => {
        ship = new Ship(3);
        gameboard = new GameBoard();
    });
    
    test('createBoard()', () => {
        expect(gameboard.board.length).toBe(10);
    });

    test('getBoard()', () => {
        expect(gameboard.getBoard().length).toBe(10);
        expect(Array.isArray(gameboard.getBoard())).toBe(true);
    });

    test('isCoordsValid()', () => {
        expect(gameboard.isCoordsValid(3,1,2)).toBe(true);
        expect(gameboard.isCoordsValid(3,11,12)).toBe(false);
        expect(gameboard.isCoordsValid(3,-1,-4)).toBe(false);
    });

    test('setShip()', () => {
        gameboard.setShip(ship, 0, 1);
        expect(gameboard.board[1][0].name).toEqual({
            length: 3,
            hits: [ { hit: false }, { hit: false }, { hit: false } ]
          });
        expect(gameboard.board[1][0].index).toBe(0);
        expect(gameboard.board[2][0].index).toBe(1);
        expect(gameboard.board[3][0].index).toBe(2);
    });

    test('receiveAttack()', () => {
        gameboard.setShip(ship, 0, 1);
        gameboard.receiveAttack(0,1);
        expect(gameboard.board[1][0].name.hits).toEqual([ { hit: true }, { hit: false }, { hit: false } ]);
        gameboard.receiveAttack(2,1);
        gameboard.receiveAttack(3,4);
        expect(gameboard.missedHits).toEqual([ { x: 2, y: 1 }, { x: 3, y: 4 } ]);
    });

    test('allShipsSunk()', () => {
        gameboard.setShip(ship, 0, 1);
        gameboard.receiveAttack(0,1);
        gameboard.receiveAttack(0,2);
        gameboard.receiveAttack(0,3);
        expect(gameboard.missedHits).toEqual([]);
        expect(gameboard.allShipsSunk()).toBe(true);
    })
});