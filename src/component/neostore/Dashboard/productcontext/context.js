
import React, { Component } from 'react'
import B from "./bb"
import C from "./cc";
import axios from "axios"
export const dummycontext=React.createContext();
var config = {
    method: 'get',
    url: 'https://neostore-api.herokuapp.com/api/product',
    headers: { }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

export default class context extends Component {
 


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

