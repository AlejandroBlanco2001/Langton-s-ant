export class Ant{
    x: number;
    y: number;
    facing: number = 0;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    move(color: boolean){
        let position =  this.rotate(color);
        this.x = position.x;
        this.y = position.y;
        if(this.facing == 0){
            this.y += 1;
        }else if(this.facing == 90){
            this.x += 1;
        }else if(this.facing == 180){
            this.y -= 1;
        }else{
            this.x -= 1;
        }
        console.log(this.position());
    }

    /*
    Rotation around theta on (x,y) to (x',y')
    - x' = xcos(theta) - sin(theta)y
    - y' = xsin(theta) + cos(theta)y
    In this case, is always 90 clockwise or 90 anti-clockwise
    */
    private rotate(color: boolean){
        var sign : number = color == true ? -1: 1; 
        this.facing += 90 * sign;
        if(this.facing == 360) this.facing = 0;
        if(this.facing < 0) this.facing = 270; 
        return {
            x: sign * this.y,
            y: -sign * this.x
        }
    }

    position(){
        return `Position (${this.x},${this.y})`
    }

}
