import React, { Component } from 'react';
import Map from './comps/Map';
import DataLookup from './comps/ApiFunctions';
import SearchInput from "./comps/SearchInput";
import Body from './parts/Body';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        addresses:[]
    };
  }


  searchAddr = event => {
    console.log(event);

    this.setState({
      addresses: [event]
    });

    /*
    DataLookup.getTXfromAddr(event).then(r=>{
      this.setState({
        addresses: r
      });
    });
    */
  }



/*
  render(){
    return(
      <div>
          <SearchInput onSubmit={this.searchAddr}/>
          <Map addresses={this.state.addresses}/>
      </div>
    );
  }

*/

  render(){

    const bodyProps = {
      baseAddress:"1BV7g7hcMDGJYF1CkeUzcgqF2WbJruz7Jk",
    }

    return(
      <div>
          <SearchInput onSubmit={this.searchAddr}/>
          <Body {...bodyProps} />
      </div>

    )
  }



}

