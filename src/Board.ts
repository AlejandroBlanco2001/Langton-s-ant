import { Ant } from "./Ant";
export class Board {
    /**
     * true means white square
     * false means black square
     */
    private grid: boolean[][];
    public dimension: number;
    private end: boolean;
    private running: boolean;
    private ant: Ant;

    constructor(dimension: number) {
        this.dimension = dimension;
        this.grid = [];
        this.end = false;
        this.running = false;
        this.ant = new Ant(0, 1);
        for (var i: number = 0; i < dimension; i++) {
            this.grid[i] = [];
            for (var j: number = 0; j < dimension; j++) {
                this.grid[i][j] = false;
            }
        }
    }

    color(position: any) {
        let { x, y } = position;
        if ((x >= 0 && x <= this.dimension) || (y >= 0 && y <= this.dimension)) {
            this.grid[x][y] = !this.grid[x][y];
        }
        return null;
    }

    move(){
        let previous = { x: this.ant.x, y: this.ant.y };
        let matrix_position = this.mapCoordinates(previous);
        if (this.isOutsideGrid(matrix_position)) {
            alert("CHOCASTE CONTRA LA PARED");
            this.end = true;
            this.running = false;
        }else{
            this.ant.move(this.grid[matrix_position.x][matrix_position.y]);
            this.color(matrix_position);
            this.running = true;
        }
    }

    isOutsideGrid(coordinates: any) {
        return (
            coordinates.x < 0 ||
            coordinates.x >= this.dimension ||
            coordinates.y < 0 ||
            coordinates.y >= this.dimension
        );
    }

    mapCoordinates(coordinates: any) {
        let center = (this.dimension + 1) / 2 - 1;
        return {
            x: center + coordinates.x,
            y: center + coordinates.y,
        };
    }

    isTerminated(){
        return this.end;
    }

    isRunning(){
        return this.running;
    }

    getAnt(){
        return this.ant;
    }
}
