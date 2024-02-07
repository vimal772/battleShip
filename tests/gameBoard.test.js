import { GameBoard } from "../src/gameBoard";

const playerBoard = new GameBoard(10)

test('board created',()=> {
    expect(playerBoard).toBeTruthy()
})

test('size', ()=> {
    expect(playerBoard.size).toBe(10)
})

test('array', () => {
    expect(typeof playerBoard.board).toBe('object')
    expect(typeof playerBoard.objList).toBe('object')
})

test('place a ship', () => {
    playerBoard.placeShip([1,0],5,'x')
    expect(playerBoard.hasShip([1,0])).toBeTruthy()
})

test('horizontal', () => {
    playerBoard.placeShip([1,1],6,'x')
    expect(playerBoard.hasShip([1,6])).toBe(true)
})

test('no shio', ()=> {
    expect(playerBoard.hasShip([0,0])).toBe(false)
})

test('vertical', ()=> {
    playerBoard.placeShip([2,5],5,'y')
    expect(playerBoard.hasShip([4,5])).toBe(true)
})

test('sunk', ()=> {
    expect(playerBoard.allShipSunk()).toBe(false)
})

test('attacked', ()=> {
    playerBoard.placeShip([0,0],1,'x') // ship of length 1 in horizontal
    playerBoard.receiveAttack([0,0]) 
    expect(playerBoard.objList[0].attacked).toBe(true) // 
    expect(playerBoard.objList[0].ship.hits()).toBe(1) // attacked on ship
    expect(playerBoard.objList[0].ship.isSunk()).toBe(true)  //ship sunked
    expect(playerBoard.allShipSunk()).toBe(true) // one ship only so all ship sunked
})