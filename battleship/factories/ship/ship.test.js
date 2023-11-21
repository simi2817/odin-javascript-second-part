const Ship = require('./ship.js');

describe('Ship', () => {
    let ship;

    beforeEach(() => {
        ship = new Ship(3)
    });

    test('length property', () => {
        expect(ship.length).toBe(3);
    });

    test('hitGrid()', () => {
        expect(ship.hits.length).toBe(3);
    });

    test('hit()', () => {
        ship.hit(1);
        expect(ship.hits[0].hit).toBe(false);
        expect(ship.hits[1].hit).toBe(true);
    });

    test('isSunk()', () => {
        ship.hit(0);
        ship.hit(1);
        ship.hit(2);
        expect(ship.isSunk()).toBe(true);
    });
});

