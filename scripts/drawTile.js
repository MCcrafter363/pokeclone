import { Tiles } from "./tiles.js";
import { Vector2 } from "./util/vector2.js";

export class DrawTile{
    ctx
    tile

    /**
     * 
     * @param {*} ctx 
     * @param {Tiles} tile
     */
    constructor(ctx, tile) {
        this.ctx= ctx
        this.tile = tile
    }


    /**
     * 
     * @param {Vector2} destination 
     * @param {Vector2} size 
     */
    draw(destination = new Vector2(0,0,), size = new Vector2(12,12)) {
        this.ctx.drawImage(this.tile.img, this.tile.x, this.tile.y, this.tile.tile_size.x, this.tile.tile_size.y, destination.x, destination.y, size.x, size.y)
    }
}