import { Board } from "./Board";
import { Util } from "./Util";

// Button for create grid and start simulation 
var buttonStart = document.getElementById("startButton");
var buttonGrid = document.getElementById("createGrid");

var isRunning : boolean = false;
var board: Board;
var timePerUpdate : number = 1000;

let speedButtons = document.getElementsByClassName("speedButtons");
Array.prototype.forEach.call(speedButtons,function(button){console.log(button);});
// Cells of the grid
var cells : any[] = [];

function createGrid(dimension: number) {
    var temp : any[] = [];
    document.getElementById("container")?.remove();
    var container = document.createElement("div");
    container.setAttribute("id", "container");
    container.setAttribute("class","centerItem");
    container.style.setProperty(
        "grid-template-columns",
        "repeat(" + dimension + ",1fr)"
    );
    for (let i = 0; i < dimension ** 2; i += 1) {
        var cell = document.createElement("div");
        cell.setAttribute("class", "cell");
        container.appendChild(cell);
        temp.push(cell)
        if(temp.length == dimension){
            cells.push(temp);
            temp = [];
        }
    }
    let menu = document.getElementById("menu");
    let centerMenu = document.getElementById("centerElements");
    centerMenu!.insertBefore(container,menu);
}

function paint(coordinates: any){
    let matrixCoord = Util.mapCoordinates(board.dimension,coordinates);
    let color = board.getColor(matrixCoord);
    if(color == true){
        (<HTMLElement> cells[matrixCoord.x][matrixCoord.y]).style.backgroundColor = "#000000";
    }else{
        (<HTMLElement> cells[matrixCoord.x][matrixCoord.y]).style.backgroundColor = "#ffffff";
    }
}

buttonStart!.onclick = function () {
    let grid = document.getElementById("container");
    if(grid != null || grid != undefined){
        if(!isRunning){
            isRunning = true;
            let dimension: number = Number(
                (
                    (<HTMLInputElement>(
                        document.getElementById("dimension")
                    )) as HTMLInputElement
                ).value
            );
            if (dimension <= 0) {
                return null;
            }
            while (dimension % 2 == 0) {
                alert("Por favor, ingrese un numero impar y mayor que 0");
                return null;
            }
            let interval: any = null;
            board = new Board(dimension);
            interval = setInterval(() => {
                if(!board.isTerminated() && !board.isOutside()){
                    paint(board.getAnt().getCoordinates());
                    board.move();
                }else{
                    clearInterval(interval);
                    isRunning = false;
                }
            }, timePerUpdate);
        }else{
            alert("EJECUCCION CORRIENDO");
        }
    }else{
        alert("CREA UN GRID PRIMERO");
    }
};

buttonGrid!.onclick = function () {
    let dimension: number = Number(
        (
            (<HTMLInputElement>(
                document.getElementById("dimension")
            )) as HTMLInputElement
        ).value
    );
    if (dimension <= 0) {
        return null;
    }
    while (dimension % 2 == 0) {
        alert("Por favor, ingrese un numero impar y mayor que 0");
        return null;
    }
    createGrid(dimension);
}

