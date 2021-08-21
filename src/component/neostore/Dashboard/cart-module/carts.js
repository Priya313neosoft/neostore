import React from "react";
import { useState, useEffect,useMemo } from "react";
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
import { connect } from 'react-redux'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {gettocard} from "../ACTION/cart-module.action"


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Carts = (props) => {
  console.log(props,"props")
  const [cartdata, setCartData] = useState([]);
  const [increase, setIncrease] = useState("");
  const [decrease, setDecrease] = useState("");
  const [deleted, setDeleted] = useState(false)
  console.log(increase);
  const classes = useStyles();
  const history = useHistory();
  const Increament = (productId, quantities) => {
    var data = JSON.stringify({
      quantity: quantities + 1,
    });

    var config = {
      method: "put",
      url: `https://neostore-api.herokuapp.com/api/cart/${productId}`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      setIncrease(increase + 1);
    });
  };
  const decreament = (productId,quantities) => {
    
    console.log(productId);
    var data = JSON.stringify({
      quantity: quantities - 1,
    });

    var config = {
      method: "put",
      url: `https://neostore-api.herokuapp.com/api/cart/${productId}`,
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      setDecrease(decrease-1)
    });

  };
  const removeItem =  (id) => { 
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
     function (response) {
        console.log(JSON.stringify(response.data));
        setDeleted(!deleted)
      }
    );
  };
 useMemo(() =>
    setCartData(props.cardata?props.cardata:[])
 , [props.cardata])
  useEffect(() => {
    props.dispatch(gettocard())
   
  }, []);
  useEffect(() => {
    // var config = {
    //   method: "get",
    //   url: "https://neostore-api.herokuapp.com/api/cart",
    //   headers: {
    //     Authorization:
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNmMyNjRhMjBkMDA5MzljN2M2NThiNyIsImVtYWlsIjoibWVldEBnbWFpbC5jb20iLCJkYXRlSXNzdWVkIjoiMjAyMS0wNC0wN1QwNzo0MjoyNS4zNzVaIiwic2VjdXJlRmdwIjoiZTQ4ZDM4ZjliNzVjNWZhMmQxNTgyMGU1NGQ3N2Y3N2VlOGFjNmY2MjU3YWZmODcwYmI4Y2U1NDc1NWRjYmM2YiIsImlhdCI6MTYxNzc4MTM0NSwiZXhwIjoxNjgwODUzMzQ1fQ.i16N1-cXKX6LOGqd-nIZggyxvUA0J84_eedS1o4W9Jc",
    //   },
    // };
    // axios(config).then(function (response) {
    //   // console.log(JSON.stringify(response.data.data));
    //   const productdata = response.data.data;
    //   setCartData(productdata.products);
    // });
  }, [increase,decrease,deleted]);
  const handleClick = () => {
    history.push("/checkout");
  };
  let total = 0;
  console.log(props)
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
                          onClick={() => decreament(row._id, row.quantity)}
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
                          onClick={() => removeItem(row._id)}
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



const mapStateToProps = (state) => {
  return {
        cardata:state.totcart.cartreddata
  }
  
}

export default connect(mapStateToProps)(Carts)

