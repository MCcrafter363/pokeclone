import { settings } from "./gameSettings.js"
import { InitState } from "./states/initState.js"
import { StateManager } from "./states/stateManager.js"
import { Tiles } from "/scripts/tileTemplate.js"

const setting = settings

let c = document.getElementById("main")
let background = document.getElementById("map")
c.width = window.innerWidth
c.height = window.innerHeight
background.width = window.innerWidth
background.height = window.innerHeight
let bgctx = background.getContext("2d")
let ctx = c.getContext("2d")
let tileSet = document.getElementById("tiles")

let backdrop = new Tiles(bgctx, tileSet, 10,20)

let stateManager = new StateManager()
let initState = new InitState()
initState.init(settings.images)
stateManager.setState(initState)

//draw backdrop
// for(let i = 0; i<c.width; i++){
//         for(let b = 0; b<c.height; b++){
//             backdrop.draw(i,b)
            
//         }
//     }

//     //draw house
//         for(let i = -1; i<8; i++){
//             for(let b = 0; b<7; b++){
//             let layer1 = new Tiles(bgctx,tileSet, i,b)
//             layer1.draw(i, b)
//         }
//         }
        
//         //draw tree
//         for(let i = 0; i<5; i++){
//             for(let b = 7; b<12; b++){
//             let layer2 = new Tiles(bgctx,tileSet, i,b)
//             layer2.draw(i, b)
//         }
//         }


let controllerIndex= null;
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;



window.addEventListener("gamepadconnected", (event)=>{
    controllerIndex = event.gamepad.index
    console.log("gamepad " + controllerIndex + " has been connected")
})


window.addEventListener("gamepaddisconnected", (event)=>{
    console.log("gamepad " + controllerIndex + " has been disconnected")
    controllerIndex = null
    
})

let player = {
    x:0,
    y:0,
    width:50,
    height:50
}

function controllerInput(){
    if(controllerIndex !== null){
        let gamepad = navigator.getGamepads()[controllerIndex]
        let buttons = gamepad.buttons
        let leftrightvalue = gamepad.axes[0]
        let updownvalue = gamepad.axes[1]

        let stickDeadzone = 0.4
        
        upPressed = buttons[12].pressed
        downPressed = buttons[13].pressed
        leftPressed = buttons[14].pressed
        rightPressed = buttons[15].pressed


        if(leftrightvalue >= stickDeadzone){
            rightPressed = true
        } else if(leftrightvalue <= -stickDeadzone){
            leftPressed = true
        }

        if(updownvalue >= stickDeadzone){
            downPressed = true
        } else if(updownvalue <= -stickDeadzone){
            upPressed = true
        }
    }
}


function playerUpdate(){
    if(upPressed == true ){
        player.y -= 20
    }
    if(downPressed == true ){
        player.y += 20
    }
    if(rightPressed == true ){
        player.x += 20
    }
    if(leftPressed == true ){
        player.x -= 20
    }
}


function update(){
    stateManager.update()
    stateManager.render()
controllerInput()
playerUpdate()

    c.width = window.innerWidth
    c.height = window.innerHeight

ctx.clearRect(0,0, c.width, c.height)
ctx.drawImage(background, 0, 0, c.width, c.height, 0, 0, c.width, c.height)
ctx.fillRect(player.x, player.y, player.width, player.height)

requestAnimationFrame(update)
}



update()

