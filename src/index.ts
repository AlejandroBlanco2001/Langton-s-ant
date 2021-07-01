import { Board } from "./Board";
import { Util } from "./Util";

var button = document.getElementById("startButton");
var board: Board;
var isRunning : boolean = false;
var cells : any[] = [];

function createGrid(dimension: number) {
    var temp : any[] = [];
    document.getElementById("container")?.remove();
    var container = document.createElement("div");
    container.setAttribute("id", "container");
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
    document.body.appendChild(container);
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

button!.onclick = function () {
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
        createGrid(dimension);
        interval = setInterval(() => {
            if(!board.isTerminated() && !board.isOutside()){
                paint(board.getAnt().getCoordinates());
                board.move();
            }else{
                clearInterval(interval);
                isRunning = false;
            }
        }, 1000);
    }else{
        alert("EJECUCCION CORRIENDO");
    }
};
