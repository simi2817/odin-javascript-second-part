class Player {
    constructor(name) {
        this.name = name;
        this.isTurn = true;
    }

   getName() {
        return this.name;
   }

   start() {
    if(!this.isTurn)
        this.isTurn = true;
   }

   end(player) {
    if(this.isTurn) {
        this.isTurn = false;
        player.start();
     }
   }

   battle(x, y, attacker, attackBoard) {
    if(this.isTurn) {
        attackBoard.receiveAttack(x, y);
        this.end(attacker);
    }
   }

}

class Computer extends Player {
    constructor(name, attacker, attackBoard) {
        super(name, attackBoard);
        this.isTurn = false;
        this.attacker = attacker;
        this.attackBoard = attackBoard;
        this.attacks = [];
    }

    computerBattle() {
        if(this.isTurn) {
            const coords = { x: null, y: null };
            while(true) {
                coords.x = Math.floor(Math.random() * 10);
                coords.y = Math.floor(Math.random() * 10);
                if(!this.attacks.includes(coords.x) && !this.attacks.includes(coords.y)) {
                    this.attacks.push(coords);
                    this.battle(coords.x, coords.y, this.attacker, this.attackBoard);
                    break;
                }
            }
        }
    }
}

module.exports = {
    Player,
    Computer
};