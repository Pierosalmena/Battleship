class Ship {
    constructor(length){
        this.length = length
        this.hitTimes = null;
        this.sunk = false;
    }

    hit(){
        this.hitTimes++
    }

    isSunk(){

    }
}

class Gameboard {
    constructor(){

    }
}

class Player{

}


export {Ship}