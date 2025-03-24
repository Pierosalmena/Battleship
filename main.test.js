import {Ship, Gameboard, Player} from './main.js'

test('hit method', () => {
    const ship = new Ship(3)
    const beforeFirstHit = ship.hitTimes
    ship.hit()
    expect(ship.hitTimes).toBe(beforeFirstHit + 1)
})

test('hit method on sunk', () => {
    const ship = new Ship(2)
    ship.hitTimes = 2;
    ship.hit()
    expect(ship.sunk).toBe(true)
})

test('isSunk method', () => {
    const ship = new Ship(3)
    ship.isSunk()
    expect(ship.sunk).toBe(true)
})

test('gameboard class', () => {
    const gameboard = new Gameboard(5)
    const ship = new Ship(3)

    gameboard.placeShip(ship, 2, 4, "h")
    expect(gameboard.board[2][4]).toBe(ship)
    expect(gameboard.board[2][5]).toBe(ship)
})

test('gameboard vertically', () => {
    const gameboard = new Gameboard(5)
    const ship = new Ship(3)

    gameboard.placeShip(ship,2,1,"v")
    expect(gameboard.board[2][1]).toBe(ship)
    expect(gameboard.board[3][1]).toBe(ship)

})

test('gameboard receivedAttack', () => {
    const gameboard = new Gameboard(5)
    const ship = new Ship(1)
    gameboard.placeShip(ship,2,1,"v")
    gameboard.receiveAttack(2,1);
    expect(gameboard.board[2][1]).toBe("x")
    expect(ship.hitTimes).toBe(1)
    expect(ship.sunk).toBe(true)

})
