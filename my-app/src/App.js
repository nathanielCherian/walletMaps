import React, { Component } from 'react';
import Map from './comps/Map';
import AddressNode from './comps/AddressNode';
import DataLookup from './comps/ApiFunctions';
import SearchInput from "./comps/SearchInput";

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        addresses:["123123", "234234234", "35657897"]
    };
  }


  searchAddr = event => {
    console.log(event);
    DataLookup.getTXfromAddr(event).then(r=>{
      this.setState({
        addresses: r
      });
    });
  }


  render(){
    return(
      <div>
          <SearchInput onSubmit={this.searchAddr}/>
          <Map addresses={this.state.addresses}/>

      </div>
    );
  }

}

