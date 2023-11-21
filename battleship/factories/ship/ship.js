class Ship {
    constructor(length) {
        this.length = length;
        this.hits = this.hitGrid();
    }

    hitGrid() {
        const grid = [];
        for(let i = 0; i < this.length; i++)
            grid.push({ hit: false });
        return grid;
    }

    hit(position) {
        return this.hits[position].hit = true;
    }

    isSunk() {
        const sunk = (ele) => ele.hit === true;
        return this.hits.every(sunk);
    }
}

module.exports = Ship;