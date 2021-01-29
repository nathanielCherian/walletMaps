import { PureComponent } from "react";
import Draggable from "react-draggable";
import "./node.css";

export default class Node extends PureComponent{

    constructor(props){
        super(props);

        this.addr = this.props.addr;
        
    }


    onDoubleClick = event =>{
        this.props.onDoubleClick(this.addr);
    };  

    
    render(){

        const nodeProps = {
            className:"node box " + this.props.addr
        }

        const draggableProps = {
            defaultPosition:this._getRndPos(),
        }

        return(
            <Draggable {...draggableProps} onDrag={this.props.updateParent}>
                <div {...nodeProps} onDoubleClick={this.onDoubleClick}></div>
        
            </Draggable>
        )
    }




    _getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    _getRndPos(){
        return {x:this._getRndInteger(0,500), y:this._getRndInteger(0,500)};
    }

}