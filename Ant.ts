export class Ant{
    x: number;
    y: number;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    move(color: boolean){
        let position = this.rotate(color);
        this.x = position.x;
        this.y = position.y;
    }

    /*
    Rotation by theta around theta (x,y) to (x',y')
    - x' = xcos(theta) - sin(theta)y
    - y' = xsin(theta) + cos(theta)y
    In this case, is always 90 clockwise or anti-clockwise
    */
    private rotate(color: boolean){
        var sign : number = color == true ? -1: 1; 
        return {
            x: sign * this.y,
            y: -sign * this.x
        }
    }

    position(){
        return `Posicion (${this.x},${this.y})`
    }

}
