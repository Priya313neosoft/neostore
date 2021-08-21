import React from "react";
import { useState, useEffect } from "react";
import "./common.css";
import axios from "axios"
import moment from "moment";
function Dashboard() {
   const [user, setUser] = useState([]);
  // console.log(user);
  const [color, setColor] = useState(["red", "blue", "pink", "red"]);
  // const userdata = async()=>{
  //           const res = await fetch("http://localhost:4000/GetAllRecievers",{
  //               method:"GET",
  //               headers:{
  //                   Accept:"application/json",
  //                   "Content-Type":"application/json" 
  //                 },
  //               credentials:"include"
  //           });
  //           const data = await res.json();
  //           setUser(data);
  //          // console.log("recieved data is ,",data)

  // }
  // const [user, setUser] = useState([]);
  const userdata = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    console.log(res);
    const response = await res.json();
    setUser(response.data);
  };
 
  useEffect(() => {
    userdata();
  }, []);
  // useEffect(() => {
  //   userdata(); 
  // }, []);
  
  return (
    <>
      <div className="container">
        <div className="row">
          {user.map((items, key) => {
            // console.log(
            //   "hh",
            //   color[Math.floor(Math.random() * color.length + 1)]
            // );
            let count = Math.floor(Math.random() * color.length) + 1 - 1;
            // console.log("tee", count, color[count], color);
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
                      {/* <img src={"http://localhost:4000/"+items.profile} /> */}
                      <img src={items.avatar} class="rounded mx-auto d-block" alt="..."></img>
                      <p className="my-5 text-center">posted by:{items.first_name}</p>
                      <p className="text-center">posted on: {moment().format("MMMM Do YYYY")}</p>
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
