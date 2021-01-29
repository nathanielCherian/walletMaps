import { PureComponent } from "react";
import Connections from "./Connections";
import DataLookup from "./ApiFunctions";
import Node from "./Node"

export default class Body extends PureComponent{

    constructor(props){
        super(props);

        this.baseAddress = props.baseAddress;
    
        this.update = this.update.bind(this);

        this.connections = new Connections({updateParent:this.update});

        this.connections.createNode(this.baseAddress);

        /*
        .then(response=>{
            console.log("poo")
            console.log(response)
        });

        /*
        this.connections.createNode("to");
        this.connections.createNode("poo");


        this.connections.createConnection(this.baseAddress, "to");
        this.connections.createConnection(this.baseAddress, "poo");
        this.connections.createConnection("poo", "to");
        */

    }


    componentDidMount(){
        this.lookup(this.baseAddress);
    }

    
    lookup(addr){
        DataLookup.getNodesFromAddr(addr).then(response=>{
            console.log(response)
        });
    }


    update(){
        this.forceUpdate();
    }


    render(){
        /*
                        <Node addr={this.baseAddress} updateParent={this.update}/>
                <Node addr={"to"} updateParent={this.update}/>
                */

        return(
            <div>
                {this.connections.getNodes()}
                {this.connections.getLines()}
            </div>
        )
    }


}