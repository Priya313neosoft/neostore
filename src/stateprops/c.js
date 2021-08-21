import React, { Component } from 'react'

export class c extends Component {
    render() {
        return (
            <div>
                <p>component c</p>
                {this.props.name}
                
            </div>
        )
    }
}

export default c
