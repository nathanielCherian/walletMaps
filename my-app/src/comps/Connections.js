import LineTo from "react-lineto";
import AddressNode from "./AddressNode";

export default class Connections{

    constructor({centralAddress, parentUpdateFunc}){
        this.centralAddress = centralAddress;
        this.parentUpdateFunc = parentUpdateFunc;
        
        this.addressNodes = []
        this.addresses = []; //connected addresses
    }


    _getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    _getRndPos(){
        return {x:this._getRndInteger(-300,300), y:this._getRndInteger(-300,300)};
    }

    createNodes(addresses){

        this.addresses = addresses;
        this.addressNodes = []

        for(const address of addresses){
            this.addressNodes.push(
                <AddressNode addr={address} key={address} defaultPosition={this._getRndPos()} updateParent={this.parentUpdateFunc}/>
            )

        }

    }




    render(){

        this.connections = this.addresses.map(address =>
            <LineTo from={this.centralAddress} to={address} delay={true} key={this.centralAddress + "+"+ address}/>
        )

        return {lines:this.connections, nodes:this.addressNodes}
    }

}