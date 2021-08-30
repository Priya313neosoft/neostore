import React from "react";
import { Link, useHistory } from "react-router-dom";
import LeftCustomer from "../order-module/leftCustomer";
import UserprofileEdit from "./userprofileeEdit";

function UserProfile() {
  let history = useHistory();

  const handleClick = () => {
    history.push("/editprofile");
  };
  return (
    <>
      <div className="container">
          <h3 className="text-center my-4">Profile</h3>
          
       
        <hr />
        <div className="row">
         
          <div className="col-lg-6 col-md-4 col-sm-4 ">
            <LeftCustomer />
          </div>
          <div className="col-lg-6 col-md-8 col-sm-8">
            <div style={{ textAlign: "left" }}>
              <div
                className="card card_mob  bg-light rounded "
                style={{ width: "28rem", height: "20rem" }}
              >
                <div className="card-body">
                  <p><b className='mr-3'>FirstName :</b> {localStorage.getItem("fname")}</p>
                  <p><b className='mr-3'>LastName :</b> {localStorage.getItem("lname")}</p>
                  <p><b className='mr-3'>Gender :</b> {localStorage.getItem("gender")}</p>
                  <p><b className='mr-3'>Date of Birth : </b>{localStorage.getItem("dob")}</p>
                  <p><b className='mr-3'>Mobile No. :</b> {localStorage.getItem("phone")}</p>
                  <p><b className='mr-3'>Email Address :</b> {localStorage.getItem("email")}</p>
                  <button className="btn btn-md btn-dark" onClick={handleClick}>
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;

// function Userprofile() {
//   return (
//     <>
//       <div>
//         <Link
//         //   type="button"
//         //   className="btn btn-primary"
//           data-toggle="modal"
//           data-target="#profile"
//         >
//           Profile
//         </Link>

//         <div
//           className="modal fade"
//           id="profile"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog" role="document">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title" id="exampleprofileLabel">
//                   Profile
//                 </h5>
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <div className="modal-body" style={{textAlign:"left"}}>
//                 <p>FirstName</p>
//                 <p>LastName</p>
//                 <p>Gender</p>
//                 <p>Date of Birth</p>
//                 <p>Mobile No.</p>
//                 <p>Email Address</p>
//               </div>
//               <div className="modal-footer">

//           <UserprofileEdit/>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Userprofile;
