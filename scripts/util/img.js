export class ImgLoader{
    src
    img

    constructor(src){
        this.src = src
        this.img = new Image()
    }

    load(callback){
        this.img.src = this.src
        this.img.onload = ()=>{
            callback(this.img)
        }
    }

}