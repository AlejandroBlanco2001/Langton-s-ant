import { Board } from "./Board";
import { Util } from "./Util";

// Button for create grid and start simulation 
var buttonStart = document.getElementById("startButton");
var buttonGrid = document.getElementById("createGrid");
var antFigure = document.createElement("div");
antFigure.setAttribute("id","ant");

var isRunning : boolean = false;
var board: Board;
var timePerUpdate : number = 1000;

// Grab all the buttons for the speed
let speedButtons = document.getElementsByClassName("speedButtons");
// Put a listener for set up the speed of the update for each button
Array.prototype.forEach.call(speedButtons,function(button){
    button.addEventListener("click",function(){
        timePerUpdate = Number(button.value);
        alert("TIME PER UPDATE : " + timePerUpdate);
    });
;})

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
        (<HTMLElement> cells[matrixCoord.x][matrixCoord.y]).style.backgroundColor = "#5564eb";
    }else{
        (<HTMLElement> cells[matrixCoord.x][matrixCoord.y]).style.backgroundColor = "#141414";
    }
}

function paintAnt(coordinates: any){
    let matrixCoord = Util.mapCoordinates(board.dimension,coordinates);
    let cell = (<HTMLElement> cells[matrixCoord.x][matrixCoord.y]); 
    cell.appendChild(antFigure);
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
                    let coordinates = board.getAnt().getCoordinates();
                    paintAnt(coordinates);
                    paint(coordinates);
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

