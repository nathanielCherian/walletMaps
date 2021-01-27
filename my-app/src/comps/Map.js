import { Component } from "react";
import AddressNode from "./AddressNode";
import ConnectingLine from './ConnectingLine'

import "./map.css";

export default class Map extends Component{

    constructor(props) {
        super(props);

    }
    



    createConnection(node1, node2){
        const pos = {x1:node1.props.defaultPosition.x, y1:node1.props.defaultPosition.y, x2:node2.props.defaultPosition.x, y2:node2.props.defaultPosition.y}
        console.log(pos)
        pos.x1 += window.innerWidth/2;
        pos.x2 += window.innerWidth/2;
        pos.y1 += window.innerHeight/2;
        pos.y2 += window.innerHeight/2;

        console.log(pos)
        const line = <ConnectingLine position={pos}/>
        return line;
    }

    render(){

        /*
        const addresses = this.props.addresses.map((addr) =>
            <AddressNode addr={addr} key={addr}/>
        );
        */

        const pos1 = {x:500,y:100};
        const node1 = <AddressNode addr={'asdas'} key={'asdas'} defaultPosition={pos1} />

        const pos2 = {x:-100,y:0};
        const node2 = <AddressNode addr={'adsdas'} key={'adsdas'} defaultPosition={pos2} />

        const line = this.createConnection(node1, node2)

        //console.log(addresses)

        return(
            /*
            <div className="map">
                {addresses}
            </div>*/
            <div className="map">
                {node1}
                {node2}
                {line}
            </div>
        )

    }

}