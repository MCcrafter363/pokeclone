import { Vector2 } from "./util/vector2.js";

export class World{
    tiles
    coords
    constructor(tiles, coords){
        this.tiles = tiles;
        this.coords = coords || new Vector2(0,0)
    }

    update(){

    }

    render(ctx){

    }
}