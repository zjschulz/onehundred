import React, { Component } from 'react';

export default class SixA extends Component {
    
    render(){
        return(
            <div className="SixA" style={{background: 'white', width: '10rem', margin: '1rem'}}>
                <img src={this.props.image} alt="" style={{maxWidth: "100%"}}></img>
                <h5 style={{margin: '0'}}>{this.props.name} $<strong>{this.props.price}</strong></h5>
            </div>
        )
    }
}