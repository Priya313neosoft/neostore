import React, { Component } from 'react'
import { dummycontext } from './aa'

export class c extends Component {
    render() {
        return (
            <div>
                <p>component c</p>
                <dummycontext.Consumer>{data=><p>{data.name}<span>{data.rollno}</span></p>}</dummycontext.Consumer>
                
            </div>
        )
    }
}

export default c
