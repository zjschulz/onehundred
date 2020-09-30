import React, { Component } from 'react';

export default class ThreeA extends Component {
    
    render(){
        return(
            <div className="ThreeA" style={{background: 'white'}}>
            {this.props.message}    
            </div>
        )
    }
   

   
}