import { Vector2 } from "./util/vector2.js"

export class Tiles{
    img
    x
    y
    offset
    //size of the tiles on the tiles sheet
    tile_size
/**
 * 
 * @param {*} img 
 * @param {*} x 
 * @param {*} y 
 * @param {Vector2} offset 
 * @param {Vector2} tile_size 
 */
    constructor(img, x,y, offset, tile_size){
        this.img = img
        this.offset = offset || new Vector2(12,12)
        this.tile_size = tile_size || new Vector2(12,12)
        this.x = x*offset.x
        this.y = y*offset.y

    }

    // draw(dx,dy){
    //     this.ctx.drawImage(this.img, this.x,this.y, 12,12, dx*60,dy*60, 60,60 )
    // }
}

