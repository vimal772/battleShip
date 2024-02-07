export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max- min +1) + min)
}

function randomIndex(game) {
    const index = randomInteger(0, 99)
    if(game.objList[index].attacked === null) {
        return index
    }
    return randomIndex(game)
}

export const player = (game) => {
    const sendAttack = (index) => {
        if(index) {
            enemyGame.receuveAttack(index)
        }else {
            const random = randomIndex(game) 
            enemyGame.receuveAttack(random)
        }
    }

    const activeTurn = false

    return { sendAttack, activeTurn}
}