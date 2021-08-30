import React from "react";
import { useState } from "react";
function UserprofileeEdit() {
  const [firstName, setFirstName] = useState(localStorage.getItem("fname"));
  const [lastName, setLastName] = useState(localStorage.getItem("lname"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));
  const [birth, setBirth] = useState(localStorage.getItem("dob"));
  const [phone, setPhone] = useState(localStorage.getItem("phone"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  console.log("1", firstName, lastName, gender, birth, phone, email);
  const handleSubmit = (e) => {
    e.preventDefault()
    // // localStorage.setItem()
    //   localStorage.setItem(firstName=firstName,
      //  lastName=lastName,gender=gender,phone=phone,email=email,
      // );
    //   console.log("2", firstName, lastName, gender, birth, phone,email);
  };
  return (
    <>
    <div className="container" >
      <div className="row my-4">
        <div className="col-lg-6 " id="grad1" style={{margin:"0 auto"}}>
        <form onClick={handleSubmit}>
        <div class="modal-body">
          <div className="form-row">
            <div className="form-group  col-md-6">
              <label for="inputAddress">first Name</label>
              <input
                required
                value={firstName}
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Enter FirstName"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="inputCity">LastName</label>
              <input
                required
                value={lastName}
                type="text"
                className="form-control"
                placeholder="Enter Lastname"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label for="inputState">Gender</label>
              <input
                required
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
            <div className="form-group col-md-6">
              <label for="birthday">Date of Birth</label>

              <input
                required
                value={birth}
                type="date"
                id="birthday"
                name="birthday"
                className="form-control"
                placeholder="Enter Date of Birth"
                onChange={(e) => {
                  setBirth(e.target.value);
                }}
              />
            </div>

            <div className="form-group col-md-6">
              
            <label for="inputState">Phone</label>
              <input
              required
              pattern="[9]{1}[0-9]{9}"
                type="tel"
                className="form-control"
                id="inputZip"
                placeholder="Enter Phone"
                maxLength="10"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value.replace(/\D/g,""));
                }}
              />
            </div>

            <div className="form-group col-md-6">
              <label for="inputZip">Email</label>
              <input
              required
                type="email"
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
          <button type="submit" class="btn btn-dark">
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

export default UserprofileeEdit;
