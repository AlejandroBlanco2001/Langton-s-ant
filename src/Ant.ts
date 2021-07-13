import { Util } from "./Util";

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
        let antImage = document.getElementById("ant");
        if(color == true){
            if(this.facing == "R"){
                this.facing = "U";
                antImage?.style.setProperty("rotate","0deg");
            }else if(this.facing == "U"){
                this.facing = "L";
                antImage?.style.setProperty("rotate","-90deg");
            }else if(this.facing == "L"){
                this.facing = "D"
                antImage?.style.setProperty("rotate","180deg");
            }else{
                this.facing = "R";
                antImage?.style.setProperty("rotate","90deg");
            }
        }else{
            if(this.facing == "R"){
                this.facing = "D";
                antImage?.style.setProperty("rotate","180deg");
            }else if(this.facing == "U"){
                this.facing = "R";
                antImage?.style.setProperty("rotate","90deg");
            }else if(this.facing == "L"){
                this.facing = "U"
                antImage?.style.setProperty("rotate","0deg");
            }else{
                this.facing = "L";
                antImage?.style.setProperty("rotate","-90deg");
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
