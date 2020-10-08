import React, { Component } from 'react';

export default class ThreeA extends Component {
    
    render(){
        return(
            <div className="ThreeA" style={{background: 'white', borderRadius: "0px"}}>
            {this.props.message}
            <p></p>    
            </div>
        )
    }
   

   
}