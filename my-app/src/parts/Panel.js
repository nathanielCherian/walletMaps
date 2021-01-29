import { PureComponent } from "react";
import "./panel.css"

export default class Panel extends PureComponent{




    render(){

        if(!this.props.visible){
            return(<div></div>)
        }

        const panelData = this.props.panelData;

        return(
            <div className="panel">
                <div className="panel-body">
                    <h3>addr: {panelData.addr}</h3>
                    
                </div>
            </div>
        )
    }

}