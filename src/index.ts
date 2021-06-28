import { Board } from "./Board";

var button = document.getElementById("startButton");
var board: Board;

function createGrid(dimension: number) {
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
        cell.innerHTML = String(i + 1);
        container.appendChild(cell);
    }
    document.body.appendChild(container);
}

button!.onclick = function () {
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
        if (!board.isTerminated()) {
            board.move();
        } else {
            clearInterval(interval);
        }
    }, 1000);
};
