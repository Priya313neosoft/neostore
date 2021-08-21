import React from "react";
import { useState } from "react";
function UserprofileEdit() {
  const [firstName, setFirstName] = useState(localStorage.getItem("fname"));
  const [lastName, setLastName] = useState(localStorage.getItem("lname"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [birth, setBirth] = useState(localStorage.getItem("dob"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  console.log("1", firstName, lastName, gender, birth, phone, email);
  const handleSubmit = () => {
    // localStorage.setItem()
    //   localStorage.setItem(firstName="priya",
    //   // lastName="kumari",gender="female",phone=9430068076,email="priyabhagat313@gmail.com"
    //   );
    //   console.log("2", firstName, lastName, gender, birth, phone,email);
  };
  return (
    <>
      <div>
        <button
          type="button"
          class="btn btn-primary"
          data-toggle="modal"
          data-target="#formprofile"
        >
          Edit
        </button>
      </div>

      <div
        class="modal fade"
        id="formprofile"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleprofileEditLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header border-bottom-0">
              <div className="text-center">
                <img
                  src={localStorage.getItem("photo")}
                  className="rounded mx-5 d-block card-img-top rounded-circle"
                  alt="..."
                />
              </div>

              <h3 className="modal-title" id="exampleprofileEditLabel">
                Profile
              </h3>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onClick={handleSubmit}>
              <div class="modal-body">
                <div className="form-group">
                  <label for="inputAddress">Address</label>
                  <input
                    value={firstName}
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter FirstName"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group col-md-4">
                    <label for="inputCity">LastName</label>
                    <input
                      value={lastName}
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="Enter Lastname"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label for="inputState">Gender</label>
                    <input
                      value={gender}
                      type="text"
                      className="form-control"
                      id="inputState"
                      placeholder="Enter Gender"
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputCountry">Date of Birth</label>
                    <input
                      value={birth}
                      type="text"
                      className="form-control"
                      id="inputCountry"
                      placeholder="Enter Date of Birth"
                      onChange={(e) => {
                        setBirth(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputZip">Phone</label>

                    <input
                      type="tel"
                      className="form-control"
                      id="inputZip"
                      placeholder="Enter Phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-8">
                    <label for="inputZip">Email</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputZip"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div class="modal-footer border-top-0 d-flex justify-content-center">
                <button type="submit" class="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserprofileEdit;
