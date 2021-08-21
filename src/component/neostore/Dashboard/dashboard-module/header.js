import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {useEffect} from "react"
import { gettocard} from "../ACTION/cart-module.action"
import Badge from '@material-ui/core/Badge';


function Header(props) {
  let cartbadge=props.headercart.length
 
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand mx-auto" to="/home">
          Ecommerce 
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
              <Link className="nav-link" to="/">
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
          <form className="form-inline my-2 mx-auto ">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-light btn-md my-2 my-sm-0" type="submit">
              <Link to="/cart" className="mx-2">Cart</Link>
              <Badge color="secondary" badgeContent={cartbadge}>
           
          </Badge>
            </button>
            
            {/* <button className="btn btn-light btn-sm"> */}
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
                  <Link className="dropdown-item" to="/login">
                    Login
                  </Link>
                  <Link className="dropdown-item" to="/register">
                    Register
                  </Link>

                  <Link className="dropdown-item" to="/">
                    Logout
                  </Link>
                  <Link className="dropdown-item" to="/">
                    View Profile
                  </Link>
                </div>
              </li>
            </ul>
            {/* </button> */}
          </form>
        </div>
      </nav>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("header",state)
  return{
     headercart:state.totcart.cartreddata

  }
};

export default connect(mapStateToProps)(Header);
