import {Ship} from './main.js'

test('hit method', () => {
    const ship = new Ship(3)
    ship.hit()
    expect(ship.hitTimes.toBe(1))
})

test('isSunk method', () => {
    expect(isSunk().toBe(true))
})