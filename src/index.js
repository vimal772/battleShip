import './style.css';
import { player } from './player';
import { Grid } from './grid';
import { GameBoard } from './gameBoard';
import { createInfoContainer,createGameElements } from './htmlGenerator';

document.body.appendChild(createInfoContainer())

const gameLoop = () => {
    const humanBoard = new GameBoard()
    humanBoard.placeRandomShip()  //create random ship to be place
    const computerBoard = new GameBoard()
    computerBoard.placeRandomShip()  //create random ship to be place
    const player1 = document.querySelector('.p1-container')
    const player2 = document.querySelector('.p2-container')
    const human = player(humanBoard)
    const bot = player(computerBoard)
    const humanGrid = Grid(player1, human, humanBoard)
    const botGrid = Grid(player2, bot, computerBoard)

    humanGrid.displayGrid(false)
    botGrid.displayGrid(true)

    humanGrid.refreshGrid(true)
    botGrid.refreshGrid(false)

    const p2Cell = document.querySelectorAll('.p2-cell')
    p2Cell.forEach((cell)=> {
        cell.addEventListener('click', () => {
            const clickedRow = parseInt(cell.dataset.row)
            const clickedCol = parseInt(cell.dataset.col)
            const display = document.querySelector('.display-msg')
   
            computerBoard.receiveAttack([clickedRow, clickedCol])
            botGrid.refreshGrid(false)

            if (computerBoard.allShipSunk()) {
                display.textContent = "Player Wins!"
                setTimeout(showMsg, 1000)
                setTimeout(restartGame, 2000)
                return;
            }

            // If not, it's bot's turn to attack
            setTimeout(() => {
                bot.activeTurn = true;
                human.sendAttack();
                humanGrid.refreshGrid(true);

                // After bot's attack, check if all of the player's ships are sunk
                if (humanBoard.allShipSunk()) {
                    display.textContent = "Computer Wins"
                    setTimeout(showMsg, 1000)
                    setTimeout(restartGame, 2000)
                    return;
                }

                // Reset bot's turn status
                bot.activeTurn = false;
            }, 1000); // Delay bot's attack for better user experience (1 second)


            function showMsg() {
                display.textContent = "New Game...!"
            }
        })
    })

    const restartGame = () => {
        const container = document.querySelector('.container')
        container.remove()

        const tagDisplay = document.querySelector('.tagDisplay')
        tagDisplay.remove()

        const displayWrap = document.querySelector('.display-wrap')
        displayWrap.remove()

        createGameElements()
        gameLoop()
    }
} 

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click',() => {
    createGameElements()
    gameLoop()
})
