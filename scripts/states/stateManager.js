export class StateManager{
    current_state

    constructor(){

    }

    setState(state){
        this.current_state = state
        //this.current_state.init()

    }

    update(){
        this.current_state.update()
    }

    render(){
        this.current_state.render()
    }
}