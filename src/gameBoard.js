import { Ship } from "./ship"

export class GameBoard {
    constructor() {
        this.size = 10
        this.board = this.createBoard()
        this.objList = this.buildObjList(this.board)
    }

    receiveAttack(coord) {
        const target = [coord[0], coord[1]]
        const index = this.findIndex(this.board, target)

        if(this.objList[index].ship != null) {
            this.objList[index].ship.hits()
            this.objList[index].attacked = true
        } else {
            this.objList[index].attacked = true
        }
    }

    createBoard() {
        const board =[]
        for(let i=0;i<this.size;i++) {
            for(let j=0; j<this.size;j++) {
                board.push([i,j])
            } 
        }
        return board
    }

    buildObjList(arr) {
        const newArr = []
        for(let i=0;i<arr.length;i++) {
            newArr[i] = {
                ship: null,
                attacked: null
            }
        }
        return newArr
    }

    placeShip(coord, shipLength,position) {
        const newShip = new Ship(shipLength)
        let [endRow, endCol] = coord
        
        if(position === "x" ) {
            endCol += shipLength -1
        }else {
            endRow += shipLength -1
        }

        if(endRow >= this.size || endCol >= this.size) {
            return
        }

        for(let i=coord[0];i<= endRow; i++) {
            for(let j=coord[1]; j<= endCol; j++) {
                let index = this.findIndex(this.board,[i,j])
                this.objList[index].ship = newShip
            }
        }
    }

    hasShip(coord) {
        const target = [coord[0], coord[1]]
        const index = this.findIndex(this.board, target)
        if(this.objList[index].ship != null) {
            return true
        }
        return false
    }

    allShipSunk() {
        let result = false
        for (let i=0; i<this.objList.length;i++) {
            if(this.objList[i].ship) {
                if(this.objList[i].ship.isSunk()) {
                    result = true
                }
            }
        }

        return result
    }

    findIndex(arr, target) {
        for(let i=0;i<arr.length;i++) {
            if(target[0] === arr[i][0] && arr[i][1] === target[1]) {
                return i
            }
        }
    }

    placeRandomShip() {
        const shipsToPlace = [
            { length: 5, quantity: 1 },
            { length: 4, quantity: 1 },
            { length: 3, quantity: 2 },
            { length: 2, quantity: 1 }
        ];
    
        for (const ship of shipsToPlace) {
            for (let i = 0; i < ship.quantity; i++) {
                let isValidPlacement = false;
                let coord, position;
    
                while (!isValidPlacement) {
                    coord = [Math.floor(Math.random() * this.size), Math.floor(Math.random() * this.size)];
                    position = Math.random() < 0.5 ? 'x' : 'y';
    
                    if (position === 'x') {
                        if (coord[1] + ship.length - 1 < this.size) {
                            isValidPlacement = true;
                        }
                    } else {
                        if (coord[0] + ship.length - 1 < this.size) {
                            isValidPlacement = true;
                        }
                    }
    
                    if (isValidPlacement) {
                        // Check if the chosen cells are already occupied
                        for (let j = 0; j < ship.length; j++) {
                            let row = position === 'x' ? coord[0] : coord[0] + j;
                            let col = position === 'x' ? coord[1] + j : coord[1];
                            let index = this.findIndex(this.board, [row, col]);
                            if (this.objList[index].ship !== null) {
                                isValidPlacement = false;
                                break;
                            }
                        }
                    }
                }
    
                // Place the ship if placement is valid
                if (isValidPlacement) {
                    this.placeShip(coord, ship.length, position);
                }
            }
        }
    }    
}
