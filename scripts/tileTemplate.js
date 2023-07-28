export class Tiles{
    img
    ctx
    x
    y
    dx
    dy
    constructor(ctx,img, x,y){
        this.ctx = ctx
        this.img = img
        this.x = x*12
        this.y = y*12
    }

    draw(dx,dy){
        this.ctx.drawImage(this.img, this.x,this.y, 12,12, dx*60,dy*60, 60,60 )
    }
}

