import React from "react";
import { Link } from "react-router-dom";
import LeftCustomer from "../order-module/leftCustomer";
import UserprofileEdit from "./userprofileeEdit";
function UserProfile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-4">
            <LeftCustomer />
          </div>
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="content" style={{ textAlign: "left" }}>
              <div className="wrapper-1">
                <div className="wrapper-2">
                  <p>FirstName{localStorage.getItem("fname")}</p>
                  <p>LastName {localStorage.getItem("lname")}</p>
                  <p>Gender:{localStorage.getItem("gender")}</p>
                  <p>Date of Birth:{localStorage.getItem("dob")}</p>
                  <p>Mobile No.:{localStorage.getItem("phone")}</p>
                  <p>Email Address:{localStorage.getItem("email")}</p>

                  <button className="go-home">
                    <UserprofileEdit />
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
