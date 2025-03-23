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
    constructor(){
        // Gameboards should keep track of missed attacks so they can display them properly.
        // Gameboards should be able to report whether or not all of their ships have been sunk.
    }

    // Gameboards should have a receiveAttack function that takes a pair of coordinates, determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.

}

class Player{

}


export {Ship}