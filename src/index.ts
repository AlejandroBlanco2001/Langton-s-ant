import {Board} from "./Board";

let dimension : number =  Number(prompt("Ingrese la dimension de su tablero, debe ser impar"));
while(dimension % 2 == 0){
    dimension = Number(prompt("Ingrese la dimension de su tablero, debe ser impar"));
}
let board = new Board(dimension);
board.start(45);