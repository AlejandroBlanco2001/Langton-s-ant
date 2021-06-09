import {Ant} from "./Ant"
export class Board{

    /**
     * true means white square
     * false means black square
     */
    private grid: boolean[][];
    public dimension: number;
    public ant: Ant;

    constructor(dimension: number){
        this.dimension = dimension;
        this.grid = [];
        this.ant = new Ant(0,0);
        for(var i: number = 0; i < dimension; i++){
            this.grid[i] = []
            for(var j: number = 0; j < dimension; j++){
                this.grid[i][j] = false;
            }
        }
    }

    color(x: number, y: number){
        if(x <= this.dimension || y <= this.dimension){
            this.grid[x][y] = !this.grid[x][y];
        }
        return null;
    }

    start(steps: number){
        for(var i: number = 0; i < steps; i++){
            this.ant.move(this.grid[this.ant.x][this.ant.y]);
        }
    }
}