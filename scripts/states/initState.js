import { ImgLoader } from "../util/img.js";
import { BaseState } from "./baseState.js";

export class InitState extends BaseState{



    constructor(){
        super()
    }

    init(list_img){
        let images = {

        }
        Object.entries(list_img).forEach(img=>{
            const [key,value] = img
            let imgl = new ImgLoader(value)
            imgl.load((returnedImage)=>{
                images[key] = returnedImage
            })
            
        })
        console.log(images)
    }

    update(){
        
    }

    render(){

    }
}