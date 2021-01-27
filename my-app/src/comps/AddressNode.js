import { Component } from "react";
import Draggable from "react-draggable";

export default class AddressNode extends Component{

    constructor(props){
        super(props);
        
    }



    handleDrag = event =>{
        this.props.onDrag(event)
        //console.log(event)
    }

    render(){
        
        const style = {
            top: "50%",
            left: "50%",
            width: "70px",
            height: "70px",
            cursor: "grab",
        }

        const cn = "box addr-node " + this.props.addr;

        return(
            <Draggable onDrag={this.handleDrag} defaultPosition={this.props.defaultPosition}>
                <div className={cn} id={this.props.addr} style={style}></div>
            </Draggable>
        )
    }

}