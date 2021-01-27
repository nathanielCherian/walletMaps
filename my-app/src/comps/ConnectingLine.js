import { Component } from "react";

export default class ConnectingLine extends Component{


    constructor(props){
        super(props);

        /*
        this.state = {
            x1:0,
            y1:0,
            x2:1000,
            y2:1000
        }*/
    }

    
    render(){
        return(
            <svg width="500" height="500"><line x1={this.props.position.x1} y1={this.props.position.y1} x2={this.props.position.x2} y2={this.props.position.y2} stroke="black"/></svg>
        );
    }

}