import React from "react";
import { useState } from "react";
import Sidebar from "react-sidebar";
import { Link } from "react-router-dom";
// import ListUser from "./listUser";

function Navbar() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <>
      <div className="container">
        <Sidebar
          sidebar={
            <ul>
              <li>Home</li>
              <li>Contact</li>
              <li>Dashboard</li>
              <li>Project</li>
            </ul>
          }
          open={sidebarOpen}
          onSetOpen={setSideBarOpen}
          styles={{
            sidebar: {
              backgroundColor: "grey",
              inlineSize: "120",
              display: "block",
              paddingTop: "30px",
              wordSpacing: "100",
              fontWeight: "700",
            },
          }}
        >
        </Sidebar>
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="btn " onClick={setSideBarOpen}>Sidebar</Link>
          <Link class="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/listuser" >
                  Dashboard
                </Link>
              </li>
              
              <li class="nav-item active">
                <Link class="nav-link disabled" to="/login">
                  Login/Logout
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link disabled" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div>
        {/* <ListUser/> */}
      </div>
    </>
  );
}

export default Navbar;
