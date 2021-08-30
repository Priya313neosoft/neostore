import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { gettocard } from "../ACTION/cart-module.action";

import Badge from "@material-ui/core/Badge";
import {
  getdashboard,
  setLoading,
  searchdata,
} from "../ACTION/dashboard-module.action";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 1px",
  },
}))(Badge);

function Header(props) {
  //console.log(props, "11");
  let cartbadge = localStorage.getItem("tokens") ? props.headercart.length : "";
  const [isLoggined, setIsLoggined] = useState(false);
  console.log(isLoggined,"12345")
  useEffect(() => {
    if (localStorage.getItem("tokens")) {
      setIsLoggined(!isLoggined);
    }
  },[]);
  const handleLogin=(e)=>{
    console.log("logineed")
    e.preventDefault()
    history.push("/login")
    setIsLoggined(!isLoggined)
  
  
  
  }
  const handleLogout = (e) => {
    console.log()
    e.preventDefault()
    localStorage.clear(e);
    window.alert("logout success");
    history.push("/home");
    setIsLoggined(!isLoggined)
  };
  let history = useHistory();
  const handleClick = () => {
    history.push("/cart");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(props.text);
    props.getdashboard(props.text);
    // props.setLoading();
  };
  const handleChange = async (e) => {
    props.searchdata(e.target.value);
    // //console.log( props.searchdata(e.target.value))
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-auto" to="/">
          Neostore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item active mx-4">
              <Link className="nav-link" to="/home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item active mx-4">
              <Link className="nav-link" to="/product">
                Products
              </Link>
            </li>
            <li className="nav-item active mx-4">
      
              <Link className="nav-link" to="/order">
                Order
              </Link>
            
            </li>
          </ul>
          <form className="form-inline my-2 mx-auto " onSubmit={handleSubmit}>
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => handleChange(e)}
            />
            <button type="submit" className="btn btn-primary btn-bg ">
              Search
            </button>
          </form>
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item dropdown">
              <button
                className=" dropdown-toggle btn btn-light px-4 mx-2"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-address-book-o"></i>
              </button>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {isLoggined ? (
                  <Link
                    className="dropdown-item"
                    onClick={(e) => handleLogout(e)}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className="dropdown-item" onClick={(e)=>handleLogin(e)}>
                    Login
                  </Link>
                )}

                <Link className="dropdown-item" to="/register">
                  Register
                </Link>

                <Link className="dropdown-item" to="/profile">
                  View Profile
                </Link>
              </div>
            </li>
          </ul>
          <button className="btn btn-light btn-sm " type="submit">
            <IconButton aria-label="cart" onClick={handleClick}>
              <ShoppingCartIcon />
              {localStorage.getItem("tokens") ? (
                <StyledBadge
                  color="secondary"
                  badgeContent={cartbadge}
                ></StyledBadge>
              ) : (
                ""
              )}
            </IconButton>
          </button>

          {/* <button className="btn btn-light btn-sm"> */}

          {/* </button> */}
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  //console.log("header",state)
  return {
    headercart: state.totcart.cartreddata,
    //  dashd: state.totdashboard.dashboardata,
    text: state.totdashboard.text,
  };
};

export default connect(mapStateToProps, {
  searchdata,
  setLoading,
  getdashboard,
})(Header);
