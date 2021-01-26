import { Component } from "react";
import AddressNode from "./AddressNode";

export default class Map extends Component{



    render(){

        const addresses = this.props.addresses.map((addr) =>
            <AddressNode addr={addr} key={addr}/>
        );
        console.log(addresses)

        return(
            <div>

                {addresses}

            </div>

        )

    }

}