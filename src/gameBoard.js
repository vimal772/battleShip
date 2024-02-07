class GameBoard {
    constructor(x) {
        this.boardSize = x
    }

    receiveAttack(x,y) {

    }

    createBoard() {
        for(let i=0;i<this.boardSize;i++) {
            for(let j=0; j<this.boardSize;j++) {

            } 
        }
    }
    randomGenratedCords() {
        const x = Math.floor(Math.random() * this.boardSize)
        const y = Math.floor(Math.random() * this.boardSize)

        return { x,y }
    }
}