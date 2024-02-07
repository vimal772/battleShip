import './style.css';
import { Ship } from './ship';
import { GameBoard } from './gameBoard';

const playerBoard = new GameBoard(10)
playerBoard.placeShip([0,0],3,"x")
console.log(playerBoard.hasShip([0,0]))
console.log(playerBoard)