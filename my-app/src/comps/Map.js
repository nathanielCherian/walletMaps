import { Component } from "react";
import AddressNode from "./AddressNode";
import ConnectingLine from './ConnectingLine'
import LineTo from "react-lineto";

import "./map.css";

export default class Map extends Component{

    constructor(props) {
        super(props);

    }
    
    

    nodeDragged = (event) => {
        console.log(event);
        this.setState({event:event})
    };


    render(){


        /*
        const addresses = this.props.addresses.map((addr) =>
            <AddressNode addr={addr} key={addr}/>
        );
        */



        const pos1 = {x:500,y:100};
        const node1 = <AddressNode addr={'asdas'} key={'asdas'} defaultPosition={pos1} onDrag={this.nodeDragged} />

        const pos2 = {x:-100,y:0};
        const node2 = <AddressNode addr={'adsdas'} key={'adsdas'} defaultPosition={pos2} onDrag={this.nodeDragged} />


        //console.log(addresses)

        return(
            /*
            <div className="map">
                {addresses}
            </div>*/
            <div className="map">
                {node1}
                {node2}

                <LineTo from="asdas" to="adsdas" delay={true}/>
            </div>
        )

    }

}