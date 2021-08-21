
import React, { Component } from 'react'
import B from "./bb"
import C from "./cc"
export const dummycontext=React.createContext();


export default class aa extends Component {
    state={
        name:"priya kumari btech",
        rollno:23,
        father:"sunil kumar"
    }
    render() {
        return (
            <div>
                <p>component A</p>
                <dummycontext.Provider value={this.state}>
                    <B/>
                    <C/>
                </dummycontext.Provider>     
                
            </div>
        )
    }
}



