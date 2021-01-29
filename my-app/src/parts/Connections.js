import LineTo from "react-lineto";
import DataLookup from "./ApiFunctions";
import Node from "./Node";

export default class Connections{

    constructor({updateParent}){

        this.updateParent = updateParent;

        this.connections = [];
        this.nodes = {}


        this.addressRegistry = {}
        this.connectionList = []

    }



    createNode(addr){
        this.nodes[addr] = {
            addr:addr,
            balance:null
        }
        return
    }

    getNodes(){
        return Object.keys(this.nodes).map(key=>{
            return <Node addr={this.nodes[key].addr} updateParent={this.updateParent}/>
        });
    }


    createConnection(from, to){
        this.connections.push({
            from:from,
            to:to
        })
    }
    getLines(){
        return this.connections.map((connection) => {
            return <LineTo from={connection.from} to={connection.to} delay={true}/>
        });
    }


}