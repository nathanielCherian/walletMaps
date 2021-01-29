import LineTo from "react-lineto";
import DataLookup from "./ApiFunctions";
import Node from "./Node";

export default class Connections{

    constructor({updateParent, onDoubleClick, onClick}){

        this.updateParent = updateParent;
        this.onDoubleClick = onDoubleClick;
        this.onClick = onClick;

        this.connections = [];
        this.nodes = {}

    }


    setMapFromResponse(response){

        Object.keys(response).map(tx=>{
            const block = response[tx];

            Object.keys(block.from).map(fromAddr=>{
                this.createNode(fromAddr);
                Object.keys(block.to).map(toAddr=>{
                    this.createNode(toAddr);
                    this.createConnection(tx, fromAddr, toAddr);
                });
            });

        });

    }




    createNode(addr){
        if(addr in this.nodes) return false;
        this.nodes[addr] = {
            addr:addr,
            balance:null
        }
        return
    }
    getNodes(){
        return Object.keys(this.nodes).map(key=>{
            return <Node addr={this.nodes[key].addr} updateParent={this.updateParent} onDoubleClick={this.onDoubleClick} onClick={this.onClick}/>
        });
    }


    createConnection(txid, from, to){
        this.connections.push({
            txid:txid,
            from:from,
            to:to
        })
    }
    getLines(){
        return this.connections.map((connection) => {
            return <LineTo from={connection.from} to={connection.to} className={connection.txid} delay={true}/>
        });
    }


}