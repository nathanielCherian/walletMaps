import { Component } from "react";
import AddressNode from "./AddressNode";
import LineTo from "react-lineto";

import Connections from "./Connections"

import "./map.css";

export default class Map extends Component{

    constructor(props) {
        super(props);
        
    }
    




    render(){


        /*
        const addresses = this.props.addresses.map((addr) =>
            <AddressNode addr={addr} key={addr}/>
        );
        */



        const pos1 = {x:0,y:0};
        const node1 = <AddressNode addr={'testaddr'} key={'testaddr'} defaultPosition={pos1} updateParent={()=>{}}/>

        /*
        const pos2 = {x:-100,y:0};
        const node2 = <AddressNode addr={'adsdas'} key={'adsdas'} defaultPosition={pos2} onDrag={this.nodeDragged} />
        */

        //console.log(addresses)

        return(
            /*
            <div className="map">
                {addresses}
            </div>
                            {this.state.connections.render()}

                            <LineTo from="asdas" to="adsdas" delay={true}/>
            */

            <div className="map">
                {node1}
            </div>
        )

    }

}