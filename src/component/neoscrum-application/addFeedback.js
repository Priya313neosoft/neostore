import React from "react";
import { useState, useEffect } from "react";
import CharacterCounter from "./characterCounter";
function AddFeedback() {
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
