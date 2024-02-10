import './style.css';
import { player } from './player';
import { Grid } from './grid';
import { GameBoard } from './gameBoard';

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
   
            computerBoard.receiveAttack([clickedRow, clickedCol])
            botGrid.refreshGrid(false)

            if (computerBoard.allShipSunk()) {
                console.log('Player wins!');
                return;
            }

            // If not, it's bot's turn to attack
            setTimeout(() => {
                bot.activeTurn = true;
                human.sendAttack();
                humanGrid.refreshGrid(true);

                // After bot's attack, check if all of the player's ships are sunk
                if (humanBoard.allShipSunk()) {
                    console.log('Bot wins!');
                    return;
                }

                // Reset bot's turn status
                bot.activeTurn = false;
            }, 1000); // Delay bot's attack for better user experience (1 second)

        })
    })

    // while(humanBoard.allShipSunk() !== false && computerBoard.allShipSunk() !== false) {
    //     human.activeTurn =true
    //     human.sendAttack()
    //     // computerBoard.refreshGrid()
    //     human.activeTurn = false

    //     bot.activeTurn = true
    //     bot.sendAttack()
    //     bot.activeTurn = false
    // }

    // if(humanBoard.allShipSunk() === true) {
    //     console.log('computer wins');
    // }
    // if(computerBoard.allShipSunk() === true) {
    //     console.log('player wins')
    // }
} 

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click',() => {
    resetGame()
    gameLoop()
})

const resetGame = () => {
    const player1 = document.querySelector('p1-container')
    const player2 = document.querySelector('p2-container')
    if(player1) {
        while(player1.firstChild) {
            player1.removeChild(player1.firstChild)
        }
    }
    if(player2) {
        while(player2.firstChild) {
            player2.removeChild(player2.firstChild)
        }
    }
}