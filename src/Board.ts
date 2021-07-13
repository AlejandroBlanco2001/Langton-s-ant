import { Ant } from "./Ant";
import {Util} from "./Util";
export class Board {
    /**
     * true means white square
     * false means black square
     */
    private grid: boolean[][];
    public dimension: number;
    private end: boolean;
    private ant: Ant;

    constructor(dimension: number) {
        this.dimension = dimension;
        this.grid = [];
        this.end = false;
        this.ant = new Ant(0, 0);
        for (var i: number = 0; i < dimension; i++) {
            this.grid[i] = [];
            for (var j: number = 0; j < dimension; j++) {
                this.grid[i][j] = true;
            }
        }
    }

    getColor(position: any){
        return this.grid[position.x][position.y];
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
        let matrix_position = Util.mapCoordinates(this.dimension,previous);
        if (this.isOutside()){
            alert("You hit the wall");
            this.end = true;
        }else{
            this.ant.move(this.grid[matrix_position.x][matrix_position.y]);
            if(this.isOutside()){
                alert("You hit the wall");
                this.end = true;
            }
            this.color(matrix_position);
        }
    }

    isTerminated(){
        return this.end;
    }

    isOutside(){
        return Util.isOutsideGrid(this.dimension,Util.mapCoordinates(this.dimension,this.ant.getCoordinates()));
    }

    getAnt(){
        return this.ant;
    }
}
