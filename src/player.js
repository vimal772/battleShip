export function randomInteger(min, max) {
    return Math.floor(Math.random() * (max- min +1) + min)
}

function randomIndex(game) {
    const index = randomInteger(0, 9)
    if(game.objList[index].attacked === null) {
        return index
    }
    return randomIndex(game)
}

export const player = (enemyGame) => {
    const sendAttack = (index) => {
        if(index) {
            enemyGame.receiveAttack(index)
        }else {
            const random = [randomIndex(enemyGame), randomIndex(enemyGame)] 
            enemyGame.receiveAttack(random)
        }
    }

    const activeTurn = false

    return { sendAttack, activeTurn }
}