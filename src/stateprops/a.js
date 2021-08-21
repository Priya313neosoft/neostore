import React, { Component } from 'react'
import B from "./b"

export default class a extends Component {
    state={
        name:"priya kumari btech"
    }
    render() {
        return (
            <div>
                <p>component A</p>
                <p>hey {this.state.name}</p>
                <B data="good" name={this.state.name}/>
                
                
            </div>
        )
    }
}