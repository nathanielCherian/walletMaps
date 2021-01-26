import { Component } from "react";

export default class AddressNode extends Component{

    render(){
        return(
            <div>
                <p>{this.props.addr}</p>
            </div>
        )
    }

}