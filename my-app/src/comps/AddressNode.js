import { Component } from "react";
import Draggable from "react-draggable";

export default class AddressNode extends Component{

    constructor(props){
        super(props);
        
    }


    handleDrag(event){
        console.log(event)
    }

    render(){

        
        const style = {
            top: "50%",
            left: "50%",
            width: "70px",
            height: "70px",
            cursor: "grab",
        }


        return(
            <Draggable onDrag={this.handleDrag}  defaultPosition={this.props.defaultPosition}>
                <div className="box addr-node" id={this.props.addr} style={style}></div>
            </Draggable>
        )
    }

}