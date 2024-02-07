import { Ship } from "./ship"

export class GameBoard {
    constructor(x) {
        this.size = x
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

    randomGenratedCords() {
        const x = Math.floor(Math.random() * this.boardSize)
        const y = Math.floor(Math.random() * this.boardSize)

        return { x,y }
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

   
}
