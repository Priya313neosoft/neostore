import React, { Component } from "react";
import axios from "axios";
import { Redirect } from 'react-router-dom';

export default class characterCounter extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      chars_left: 100,
      max_char: 100,
      emailName:"",
      feadback:"",
      feadbackR:false
    };
  }
  handleWordCount = (e) => {
    const charCount = e.target.value.length;
    console.log(charCount);
    const charLength = 100 - charCount;
    console.log(charLength);
    this.setState({ chars_left:charLength,feadback:e.target.value});
  };
   handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(e)
    // this.props.history.push("/dashboard"); 
    // window.location("./dashboard")
    console.log(this.state)
    // this.setState({feadbackR:true})
var data={
  // "email": this.state.emailName,
  "feadback":this.state.feadback
}
await axios.post("http://localhost:4000/addFeadback", data, {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
}).then((res)=>{
  console.log(res)
  this.setState({feadbackR:true})
})

  }
  render() {
    if(this.state.feadbackR==true) return <Redirect to="/dashboard"/>
    return (
      <div>
        <form className="was-validated" onClick={this.handleSubmit}>
        {/* <input
                required
                  type="email"
                  value={this.emailName}
                  onChange={(e)=>this.setState({emailName:e.target.value})}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />   */}
          <div class="mb-3">
            <textarea
              type="text"
              maxLength="100"
              required
              onChange={this.handleWordCount}
              class="form-control is-invalid"
              id="validationTextarea"
              placeholder="Write your feedback here"
              required
            ></textarea>
            <div class="invalid-feedback ">
              Max 100 characters
              <span style={{ float: "right" }}>
                {this.state.chars_left}/{this.state.max_char}
              </span>
            </div>
            <button className="btn btn-primary">Submit Feedback</button>
          </div>
        </form>
      </div>
    );
  }
}
