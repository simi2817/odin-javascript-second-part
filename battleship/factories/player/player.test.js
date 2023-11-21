const { Player, Computer } = require('./player.js');
const GameBoard = require('../gameboard/gameboard.js');
const Ship = require('../ship/ship.js');

describe('Player()', () => {
    test('getName()', () => {
        const player1 = new Player('Player 1');
        expect(player1.name).toBe('Player 1');
    });
    test('battle()', () => {
        const gameboard = new GameBoard();
        const ship = new Ship(3);
        const player1 = new Player('Player 1');
        const player2 = new Player('Player 2');
        gameboard.setShip(ship, 0, 1);
        player1.battle(0, 1, player2, gameboard);
        expect(player1.isTurn).toBe(false);
        expect(player2.isTurn).toBe(true);
    });
});

describe('Computer()', () => {
    test('computerBattle()', () => {
        const gameboard = new GameBoard();
        const player1 = new Player('Player 1');
        const player2 = new Computer('Player 2', player1, gameboard);
        player1.battle(0, 1, player2, gameboard);
        player2.computerBattle();
        player2.computerBattle();
        expect(player2.attacks.length).toBeGreaterThan(0);
    });
});