import {Ship} from './main.js'

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