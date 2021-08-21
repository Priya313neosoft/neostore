import React, { Component } from 'react'
import C from "./c"

export default class b extends Component {
    render() {
        return (
            <div>
              <p> {this.props.data}</p> 
                <p>HEY HII WELCOME TO B COMPONENENT</p>
                <p>{this.props.name} welcome to component b</p>
                <C name={this.props.name}/>
                
            </div>
        )
    }
}
