export class Ship {
    constructor(length) {
        this.length = length,
        this.hitsCount =  0
    }

    hits() {
        return this.hitsCount++
    }

    isSunk() {
        if(this.hitsCount >= this.length) {
            return true
        }else {
            return false
        }
    }
}