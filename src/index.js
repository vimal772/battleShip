import './style.css';
import { player } from './player';
import { Grid } from './grid';
import { GameBoard } from './gameBoard';

const gameLoop = () => {
    const humanBoard = new GameBoard()
    // humanBoard.placeShip  create random ship to be place
    const computerBoard = new GameBoard()
    // computerBoard.placeShip  create random ship to be place

    const player1 = document.querySelector('.p1-container')
    const player2 = document.querySelector('.p2-container')
    const human = player(humanBoard)
    const bot = player(computerBoard)
    const humanGrid = Grid(player1, human, humanBoard)
    const botGrid = Grid(player2, bot, computerBoard)

    humanGrid.displayGrid()
    botGrid.displayGrid()

    while(humanBoard.allShipSunk() !== false && computerBoard.allShipSunk() !== false) {
        human.activeTurn =true
        human.sendAttack()
        // computerBoard.refreshGrid()
        human.activeTurn = false

        bot.activeTurn = true
        bot.sendAttack()
        // humanBoard.refreshGrid()
        bot.activeTurn = false
    }

    if(humanBoard.allShipSunk() === true) {
        console.log('computer wins');
    }
    if(computerBoard.allShipSunk() === true) {
        console.log('player wins')
    }
} 

/*
 stat btn
add event for click
start game loop
*/