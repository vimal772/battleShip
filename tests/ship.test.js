import { Ship } from "../src/ship";

test('returns the length', () => {
    const warShip = new Ship(3)
    expect(warShip.length).toBe(3)
})

test('hits fn', () => {
    const crusier = new Ship(2)
    expect(crusier.hitsCount).toBe(0)
})

test('hits increased', () => {
    const crusier = new Ship(2)
    crusier.hits()
    expect(crusier.hitsCount).toBe(1)
})

test('ship sunk', () => {
    const crusier = new Ship(2)
    expect(crusier.isSunk()).not.toBeTruthy()
})

test('sunked ship', () => {
    const crusier = new Ship(2)
    crusier.hits()
    crusier.hits()
    expect(crusier.hitsCount).toBe(2)
    expect(crusier.isSunk()).toBeTruthy()
})