import { PureComponent } from "react";
import Connections from "./Connections";
import DataLookup from "./ApiFunctions";
import Node from "./Node"
import Panel from "./Panel";

export default class Body extends PureComponent{

    constructor(props){
        super(props);

        this.baseAddress = props.baseAddress;
    
        this.update = this.update.bind(this);
        this.searchByAddr = this.searchByAddr.bind(this);
        this.nodeClicked = this.nodeClicked.bind(this)
        this.nodeUnclicked = this.nodeUnclicked.bind(this);

        this.connections = new Connections({updateParent:this.update, onDoubleClick:this.searchByAddr, onClick:this.nodeClicked});

        this.connections.createNode(this.baseAddress);

        this.state = {
            panelVisible:false,
            panelData:{}
        }

    }


    componentDidMount(){
        window.addEventListener('click', this.nodeUnclicked);
    }

    nodeClicked(data){
        this.setState({panelVisible:true, panelData:data});
    }

    nodeUnclicked(event){
        if(event.target.nodeName == "HTML"){
            this.setState({panelVisible:false});
        }
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
                <div>
                    {this.connections.getNodes()}
                    {this.connections.getLines()}
                </div>

                <Panel visible={this.state.panelVisible} panelData={this.state.panelData} />
            </div>
        )
    }


}