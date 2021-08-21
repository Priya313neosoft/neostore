import React, { Component } from 'react'
import {dummycontext} from './aa'


export default class bb extends Component {
    render() {
        return (
            <div>
                <dummycontext.Consumer>
                  {datas=><p>{datas.father}</p>}
                </dummycontext.Consumer>
             
            </div>
        )
    }
}
