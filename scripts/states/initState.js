import { ImgLoader } from "../util/img.js";
import { BaseState } from "./baseState.js";

export class InitState extends BaseState{



    constructor(game){
        super(game)
    }

    init(list_img){
        Object.entries(list_img).forEach(img=>{
            const [key,value] = img
            let imgl = new ImgLoader(value)
            imgl.load((returnedImage)=>{
                this.game.images[key] = returnedImage
            })
            
        })
        
    }

    update(){
        console.log(this.game)
    }

    render(){

    }
}