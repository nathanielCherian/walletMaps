import { Component } from "react";
import Draggable from "react-draggable";
import LineTo from "react-lineto";
import Connections from "./Connections";

export default class AddressNode extends Component{

    constructor(props){
        super(props);

        this.updateNode = this.updateNode.bind(this);

        const connections = new Connections({centralAddress:this.props.addr, parentUpdateFunc:this.updateNode});

        this.state = {
            connections:connections,
            showConnections: false,
        }

    }


    updateNode(){
        this.setState({event:"sds"})
    }

    getConnectedAddresses(){
        const ca = [this.props.addr+"test1", this.props.addr+"test2"]
        this.state.connections.createNodes(ca);
        this.updateNode();
    }


    handleDrag = event =>{
        this.updateNode();
        this.props.updateParent();
    }

    doubleClicked = event => {
        this.state.showConnections = !this.state.showConnections;
        this.getConnectedAddresses();
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

        const deets = this.state.connections.render()


        return(
            <div>
                <Draggable onDrag={this.handleDrag} defaultPosition={this.props.defaultPosition}>
                    <div className={cn} id={this.props.addr} style={style} onDoubleClick={this.doubleClicked}></div>
                </Draggable>

                {deets.nodes}
                {deets.lines}
            </div>
        )
    }

}