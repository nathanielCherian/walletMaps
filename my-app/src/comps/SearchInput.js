import React, {Component} from "react";

export default class SearchInput extends Component{

    cashSubmit = event => {
        this.props.onSubmit(document.getElementById('addr-search').value);
    }

    onKeyPress = event => {
        if(event.charCode === 13){
            this.props.onSubmit(document.getElementById('addr-search').value);
        }
    }



    render(){
        return(
            <div>
                <input type="text" id="addr-search" onKeyPress={this.onKeyPress}/>
                <button onClick={this.cashSubmit}>Search!</button>
            </div>
        )
    }
}