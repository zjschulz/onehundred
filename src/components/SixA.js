import React, { Component } from 'react';

export default class SixA extends Component {
    
    render(){
        return(
            <div className="SixA" style={{background: 'white', width: '10rem', margin: '1rem'}}>
                <h5>{this.props.name} </h5>
                <h5>$ <strong>{this.props.price}</strong></h5>
            </div>
        )
    }
}