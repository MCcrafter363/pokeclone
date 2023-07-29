export class Vector2{
    x
    y
    constructor(x,y){
        this.x = x
        this.y = y
    }

    addToX(value){
        this.x += value
    }
    addToY(value){
        this.y += value
    }

    clone(){
        return new Vector2(this.x, this.y)
    }

    /**
     * 
     * @param {Vector2} vector 
     */
    addVector(vector){
        this.x += vector.x
        this.y += vector.y
    }

    subVector(vector){
        this.x -= vector.x
        this.y -= vector.y
    }
}