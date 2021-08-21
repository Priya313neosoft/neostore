import React from "react";
import { useState, useEffect } from "react";
function ListUser() {
  const [user, setUser] = useState([]);
  const userdata = async () => {
    const res = await fetch("https://reqres.in/api/users/");
    console.log(res);
    const response = await res.json();
    setUser(response.data);
  };
  useEffect(() => {
    userdata();
  }, []);
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th data-checkbox="true"></th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Image</th>
            <th scope="col">Delete</th>
            <th scope="col">Edit</th>           
          </tr>
        </thead>
        <tbody>
          {user.map((items) => {
            return (
              <>
                <tr>
                  <td></td>                 
                  <td>{items.first_name}</td>
                  <td>{items.last_name}</td>
                  <td>{items.email}</td>
                  <td>
                    <img src={items.avatar}></img>
                  </td>
                  <td>
                    <i class="fa fa-trash-o" style={{ fontSize: "24px" }}></i>
                  </td>
                  <td><i class="fa fa-edit" style={{fontSize:"24px"}}></i></td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ListUser;
