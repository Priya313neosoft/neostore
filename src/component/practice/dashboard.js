import React from 'react'
import ListUser from './listUser'
function Dashboard() {
    return (
        <>
        <table>
            <thead>
                <tbody>
                    <tr>
                        
                    </tr>
                </tbody>
            </thead>

        </table>
        </>
    )
}

export default Dashboard
import React from "react";
import { useState, useEffect } from "react";
import "./common.css";
import axios from "axios"
import moment from "moment";
function Dashboard() {
  const [user, setUser] = useState([]);
  console.log(user);
  const [color, setColor] = useState(["red", "blue", "pink", "red"]);
  
  
  // const userdata = async () => {
  // const res = await fetch("https://reqres.in/api/unknown");
  //   // const res = await fetch("http://localhost:4000/GetAllRecievers");
  //    console.log(res);
  //   const response = await res.json();
  //   console.log(response)
  //   setUser(response.data);
  // };

  const userdata = async()=>{
            const res = await fetch("http://localhost:4000/GetAllRecievers",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json" 
                  },
                credentials:"include"
            });
            const data = await res.json();
            setUser(data);
           // console.log("recieved data is ,",data)

  }
  useEffect(() => {
    userdata(); 

    
    

  
  }, []);
  // api call.................................
  // var axios = require("axios");
  // var config = {
  //   method: "get",
  //   url: "http://localhost:4000/GetAllRecievers",
  //   headers: {
  //     accept:"application/json",
  //     "Content-Type": "application/json",
  //   },
  //   credentials:"include",
  //   // headers: {
  //   //   Cookie: "",
  //   // },
  // };

  // axios(config)
  //   .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  //     // setUser(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
// ......color code...........................
  // function priya(){document.querySelectorAll("h5").forEach((sp,index)=>{
  //   sp.style.background=colors[index];
  // })};
  // console.log("hh", color[Math.floor(Math.random() * 3)]);

  return (
    <>
      <div className="container">
        <div className="row">
          {user.map((items, key) => {
            console.log(
              "hh",
              color[Math.floor(Math.random() * color.length + 1)]
            );
            let count = Math.floor(Math.random() * color.length) + 1 - 1;
            console.log("tee", count, color[count], color);
            return (
              <>
                <div className="col-lg-4">
                  <div className="card my-3" key={key}>
                    <div className="card-body">
                      <h5
                        className="card-text"
                        style={{ backgroundColor: `${color[count]}` }}
                      >
                        FEEDBACK{" "}
                        <span style={{ float: "right" }}>
                          {moment().endOf("day").fromNow()}
                        </span>
                      </h5>
                      <img src={items} />
                      <p>posted by:{items.name}</p>
                      <p>posted on: {moment().format("MMMM Do YYYY")}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
import React from "react";
import {useState} from "react"
import {useHistory} from "react-router-dom"
function Login() {
  const [emailName,setEmailName]= useState("")
  const [password,setPassword]= useState("")
  let history=useHistory()
   const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(e)
    console.log(emailName,password);
    var axios = require('axios');
// var data = JSON.stringify({
//   "email": emailName,
//   "password": password
// });
var data={
  "email": emailName,
  "password": password

}

// var config = {
//   method: 'post',
//   url: 'http://localhost:4000/DeveloperSignin',
//   headers: { 
//     'Content-Type': 'application/json', 
//     // 'Cookie': 'jwtToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTA4ZTY3YzFlYTM3MzRkNzIwMzJjZjMiLCJpYXQiOjE2Mjc5NzgxNDZ9.cR8RDOh_OessDqOP26lPXbnzFzhuCFZfGrZUbI8cTQE'
//   },
//   data : data
// };
const callback = await axios.post("http://localhost:4000/DeveloperSignin", data, {
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
})
console.log(callback);
console.log(callback.status);
 history.push("/dashboard")







// axios(config)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));


// })
// .catch(function (error) {
//   console.log(error);
// });

  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                required
                  type="email"
                  value={emailName}
                  onChange={(e)=>{setEmailName(e.target.value)}}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                /> 
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                required
                onChange={(e)=>{setPassword(e.target.value)}}
                  type="password"
                  value={password}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                /> 
              </div>   
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
import React from "react";
import { useState, useEffect } from "react";
import CharacterCounter from "./characterCounter";
function AddFeedback() {
  const [user, setUser] = useState([]);
  // const [comment,setComment]=useState({
  //   text:"",
  //   chars_left:20,
  //   max_char:20
  // })
  // console.log("priya",comment.chars_left)
  // const onSubmit=()=>{
  // console.log(comment);
  // }
  const userdata = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    console.log(res);
    const response = await res.json();
    setUser(response.data);
  };
  // const handleWordCount=(e)=>{
  //   console.log("21",comment.chars_left)
  //   const charCount=e.target.value.length
  //   console.log("23",charCount);
  //   const maxChar = comment.max_char;
  //   console.log("26",maxChar)
  //   const charLength = maxChar - charCount;
  //   console.log("27",charLength);
  //   setComment({ chars_left: charLength });
   
  // }
  useEffect(() => {
    userdata();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row ">
          {user.map((items) => {
            return (
              <>
                <div className="col-lg-4 my-1">
                  <div class="card">
                    <img
                      class="card-img-top mx-auto rounded-circle"
                      src={items.avatar}
                      alt="Card image cap"
                    />
                    <p className="text-center">{items.first_name}</p>
                    <div class="card-body">
                      <CharacterCounter/>
                      {/* <form className="was-validated " onSubmit={onSubmit}>
                        <div class="mb-3">
                          <textarea
                          maxLength={comment.max_char}
                          // value={comment.text}
                          onChange={handleWordCount}
                            class="form-control is-invalid"
                            id="validationTextarea"
                            placeholder="Write your feedback here"
                            required
                          ></textarea>
                          <div class="invalid-feedback">Max 100 characters<span>{comment.chars_left}</span></div>
                          <button className="btn btn-primary ">
                            Submit Feedback
                          </button>
                        </div>
                      </form> */}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AddFeedback;



import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Item = () => {
  const [cartdata, setCartData] = useState([]);
  const [increase, setIncrease] = useState(1);
  console.log(increase);
  const classes = useStyles();
  console.log(cartdata);
  const history = useHistory();
  const Increament = (productId, quantities) => {
   

    const mapvalue = cartdata.map((datamapped) => {
      // console.log(datamapped,"datamapped");
      // console.log("eee",datamapped.productId._id===productId)
      if (datamapped.productId._id === productId) {
        return {
          ...datamapped,
          quantity: datamapped.quantity + 1,
          totalAmount: (datamapped.productId.price) *( datamapped.quantity+1),
        };
      } else {
        return {
          ...datamapped,
        };
      }
    });

    setCartData(mapvalue);
    console.log(mapvalue);
  };
  const decreament = (productIdss) => {
    console.log(productIdss);
    const decvalue = cartdata.map((mapdec) => {
      if (mapdec.productId._id === productIdss) {
        return {
          ...mapdec,
          quantity: Math.max(mapdec.quantity - 1, 1),
          totalAmount: Math.max(
            mapdec.productId.price * (mapdec.quantity - 1),
            mapdec.productId.price
          ),
        };
      } else {
        return {
          ...mapdec,
        };
      }
    });
    setCartData(decvalue);
  };
  const removeItem = async (id) => {
    console.log(id);
    var config = {
      method: "delete",
      url: `https://neostore-api.herokuapp.com/api/cart/${id}`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
      },
    };
    axios(config).then(
      await function (response) {
        console.log(JSON.stringify(response.data));
      }
    );
  };

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
      },
    };
    axios(config).then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      const productdata = response.data.data;
      setCartData(productdata.products);
    });
  }, []);
  useEffect(() => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/cart",
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
      },
    };
    axios(config).then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      const productdata = response.data.data;
      setCartData(productdata.products);
    });
  }, [increase]);
  const handleClick = () => {
    history.push("/checkout");
  };
  let total = 0;

  return (
    <>
      <div className="container">
        <div className="row">
          {/* <Badge color="secondary" badgeContent={cartdata}>
            <ShoppingCartIcon />
          </Badge> */}
          <div className="col-lg-9">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Product</TableCell>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Quantity</TableCell>
                    <TableCell align="center">price</TableCell>
                    <TableCell align="center"></TableCell>

                    <hr></hr>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartdata.map((row) => (
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <Avatar
                          src={row.productId.mainImage}
                          style={{
                            width: 80,
                            height: 100,
                            display: "inline-block",
                            verticalAlign: "top",
                          }}
                        />
                      </TableCell>
                      <TableCell align="left">{row.productId.name}</TableCell>
                      <TableCell align="left">
                        <i
                          className="fa fa-minus minus "
                          style={{ textAlign: "left" }}
                          onClick={() => decreament(row.productId._id)}
                        ></i>
                        <input type="text" value={row.quantity} disabled />
                        <i
                          className="fa fa-plus add"
                          onClick={() => Increament(row._id, row.quantity)}
                        ></i>
                      </TableCell>
                      <TableCell align="center">{row.totalAmount}</TableCell>
                      <TableCell align="center">
                        <i
                          className="fa fa-trash"
                          onClick={() => removeItem(row.productId._id)}
                        ></i>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
          <div className="col-lg-3">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Review Order</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {cartdata.map((row) => (
                    <TableRow key={row.name}>
                      <TableRow>
                        <TableCell component="th" scope="row">
                          subtotal
                          <span style={{ float: "right" }}>
                            Rs. {(total += row.productId.price * row.quantity)}
                          </span>
                        </TableCell>
                      </TableRow>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Order total
                      <span>{total}</span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      GST(5%)
                      <span>Rs.5000 </span>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      Total to pay =Rs{total + 5000}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleClick}
                    >
                      Proceed to Buy
                    </Button>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;




  //  setSortBy(user.sort((a, b) =>  a.price < b.price ? -1 : 1))
    // setSortBy(...user.sort((a,b)=>sortBy === "lowest" ? b.price - a.price : a.price - b.price) ,user.sort((a,b)=>sortBy === "highest" ? a.price - b.price : b.price - a.price)
    // ) 
  }

  // useEffect(() => {
  //   const sortArray=(type)=>{
  //     console.log(type,"type")
  //     const types={
  //       lowest:user.price,
  //       highest:user.price

  //     }
  //     console.log(types,"types")
  //     const sortProperty=types[type];
  //     const sortedd=[...user].sort((a,b)=>b[sortProperty] - a[sortProperty]);
  //     setUser(sortedd)

  //   }
  //   sortArray(sortType)
   
  // }, [sortType])


    // useEffect(async () => {
  //   await sortme().then((res) => {
  //     setUser(res);
  //     console.log("Sort Me ", res);
  //   });
  //   console.log("Sort Me ", user);
  //   //  setSortType(sorteddata)
  // }, [sortType]);
  // const sortme = async () => {
  //   const sorteddata = await user.sort((a, b) =>
  //     a.avgRating < b.avgRating ? -1 : 1
  //   );
  //   return sorteddata;
  // };




