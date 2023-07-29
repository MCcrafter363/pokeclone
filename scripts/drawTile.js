import { Tiles } from "./tiles.js";
import { Vector2 } from "./util/vector2.js";

export class DrawTile{

    /**
     * 
     * @param {*} ctx 
     * @param {Tiles} tile 
     * @param {Vector2} destination 
     * @param {Vector2} size 
     */
    constructor(ctx, tile, destination, size) {
        ctx.drawImage(tile.img, tile.x, tile.y, tile.tile_size.x, tile.tile_size.y, destination.x, destination.y, size.x*tile.tile_size.x, size.y*tile.tile_size.y)
    }
}