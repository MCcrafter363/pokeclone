import { ImgLoader } from "../util/img.js";
import { BaseState } from "./baseState.js";

export class InitState extends BaseState{

done = false
images = {}

    constructor(game){
        super(game)
    }

    init(list_img){
        const keys = Object.keys(list_img)
        keys.forEach(key=>{
            this.images[key] = false
        })



        Object.entries(list_img).forEach(img=>{
            const [key,value] = img
            let imgl = new ImgLoader(value)
            imgl.load((returnedImage)=>{
                this.game.images[key] = returnedImage
                this.images[key] = true
            })
            
        })
        
    }

    update(){

        

        Object.entries(this.images).forEach(img=>{
            
        })
    }

    render(){

    }
}