export class Ant{
    x: number;
    y: number;
    facing: String = "R";

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    move(color: boolean){
        this.rotate(color);
        if(this.facing == "R"){
            this.x += 1;
        }else if(this.facing == "U"){
            this.y += 1;
        }else if(this.facing == "L"){
            this.x -= 1;
        }else{
            this.y -= 1;
        }
        console.log(this.position());
    }

    rotate(color: boolean){
        if(color == true){
            if(this.facing == "R"){
                this.facing = "U";
            }else if(this.facing == "U"){
                this.facing = "L";
            }else if(this.facing == "L"){
                this.facing = "D"
            }else{
                this.facing = "R";
            }
        }else{
            if(this.facing == "R"){
                this.facing = "D";
            }else if(this.facing == "U"){
                this.facing = "R";
            }else if(this.facing == "L"){
                this.facing = "U"
            }else{
                this.facing = "L";
            }
        }
    }

    getCoordinates(){
        return{
            x: this.x,
            y: this.y
        };
    }

    position(){
        return `Position (${this.x},${this.y})`
    }

}
