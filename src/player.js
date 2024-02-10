export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max- min +1) + min)
}

function findIndex(arr, target) {
    for(let i=0;i<arr.length;i++) {
        if(target[0] === arr[i][0] && arr[i][1] === target[1]) {
            return i
        }
    }
}

function randomIndex(game) {
    const indexRow = randomInteger(0, 9)
    const indexCol = randomInteger(0, 9)
    const index = findIndex(game.board, [indexRow, indexCol])
    if(game.objList[index].attacked === null) {
        return [indexRow, indexCol]
    }
    return randomIndex(game)
}

export const player = (enemyGame) => {
    const sendAttack = (index) => {
        if(index) {
            enemyGame.receiveAttack(index)
        }else {
            const random = randomIndex(enemyGame) 
            console.log(random);
            enemyGame.receiveAttack(random)
        }
    }

    const activeTurn = false

    return { sendAttack, activeTurn }
}