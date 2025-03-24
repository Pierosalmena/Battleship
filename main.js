class Ship {
    constructor(length){
        this.length = length
        this.hitTimes = null;
        this.sunk = false;
    }

    hit(){
        this.hitTimes++
        if(this.hitTimes >= this.hitTimes) return this.isSunk()
    }

    isSunk(){
        this.sunk = true;
    }

}
class Gameboard {

    // Gameboards should be able to place ships at specific coordinates by calling the ship factory or class.
    constructor(amountShips){
        // this.missedAttacks = [];
        this.allShipSunk = amountShips;
        this.board = Array.from({length: 10}, () => Array(10).fill(null));

        // Gameboards should keep track of missed attacks so they can display them properly.
        // Gameboards should be able to report whether or not all of their ships have been sunk.
    }

    placeShip(ship,x,y,direction) {
        if (direction === "h"){
            if (y + ship.length > this.board[0].length) return false;

            for (let i = 0; i < ship.length; i++) {
                if (this.board[x][y + i] !== null) return false;
                } 
                
                for (let i = 0; i < ship.length; i++) {
                    this.board[x][y + i] = ship;
                }} else if (direction === "v") {
            if (x + ship.length > this.board.length) return false;

            for (let i = 0; i < ship.length; i++) {
                if (this.board[x + i][y] !== null) return false;
            } 
                for (let i = 0; i < ship.length; i++) {
                    this.board[x + i][y] = ship;
                }
            }  
    
    return true
}

    receiveAttack(x,y){
        if (this.board[x][y]){
            const target = this.board[x][y]
            target.hit()
            this.board[x][y] = "x"
            if(target.sunk === true) {
                this.allShipSunk--
                if(this.allShipSunk === 0) return "You lost all of your ships"
            }
        } else if(this.board[x][y] === "x") {
            return "Please select new coordinates, you already hit this location"
        } else {
            this.board[x][y] = "x"
        }

        // decrease all Ship sunk
        // check board if there is a ship
        // take ship name and increase hit -- noo need use hit() mehtod
        // If ship sunk property equals true reduce amount of ships in game
        // if no ship is there mark coordinates with an X
    }

    // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

}

class Player{

}


export {Ship, Gameboard}