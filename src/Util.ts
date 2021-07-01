export module Util {
    export function mapCoordinates(dimension: number, coordinates: any){
        let center = (dimension + 1) / 2 - 1;
        return {
            x: center - coordinates.y,
            y: center + coordinates.x,
        };
    }
    export function isOutsideGrid(dimension: number, coordinates: any) {
        return (
            coordinates.x < 0 ||
            coordinates.x >= dimension ||
            coordinates.y < 0 ||
            coordinates.y >= dimension
        );
    }
}
