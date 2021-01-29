import { PureComponent } from "react";
import Connections from "./Connections";
import DataLookup from "./ApiFunctions";
import Node from "./Node"

export default class Body extends PureComponent{

    constructor(props){
        super(props);

        this.baseAddress = props.baseAddress;
    
        this.update = this.update.bind(this);
        this.searchByAddr = this.searchByAddr.bind(this);
            
        this.connections = new Connections({updateParent:this.update, onDoubleClick:this.searchByAddr});

        this.connections.createNode(this.baseAddress);


        /*        
        this.connections.createNode("to");
        this.connections.createNode("poo");


        this.connections.createConnection("asdasd", this.baseAddress, "to");
        this.connections.createConnection("2", this.baseAddress, "poo");
        this.connections.createConnection("234", "poo", "to");
        
        */


    }


    componentDidMount(){
        //this.lookup(this.baseAddress);
    }


    searchByAddr(addr){
        console.log(addr);
        this.lookup(addr);
    }

    
    lookup(addr){
        DataLookup.getNodesFromAddr(addr).then(response=>{
            console.log(response)
            this.connections.setMapFromResponse(response)
            this.update();
        });
    }


    update(){
        this.forceUpdate();
    }


    render(){

        return(
            <div>
                {this.connections.getNodes()}
                {this.connections.getLines()}
            </div>
        )
    }


}