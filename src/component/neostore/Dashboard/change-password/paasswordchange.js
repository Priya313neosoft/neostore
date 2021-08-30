import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
// import Footer from "./Footer";
// import axios from "axios";
// import { useHistory } from "react-router-dom";
// // import Checkout_Side from "./Checkout_Side";
// import { Container, Row, Col } from "reactstrap";
// import { toast, ToastContainer } from "react-toastify";
// import { CHANGE_AUTH, FLUSH_OUT } from "../context/action.type";
// import { AuthContext, CartContext } from "../context/DetailContext";

// export default function Paasswordchange() {
 
 

//   return (
  
//   );
// }





































































































































// import React from "react";
// import clsx from "clsx";
// import { makeStyles } from "@material-ui/core/styles";
// import IconButton from "@material-ui/core/IconButton";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControl from "@material-ui/core/FormControl";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";
// import axios from "axios"
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//   },
//   margin: {
//     marginBottom: theme.spacing(2),
//   },
// //   withoutLabel: {
// //     marginBottom: theme.spacing(1),
// //   },
//   textField: {
//     width: "25ch",
//   },
// }));

// export default function Paasswordchange() {
//   const classes = useStyles();
//   const [values, setValues] = React.useState({
//     password: "",
//     showPassword: false,
//   });
  

//   const handleChange = (prop) => (event) => {
//     setValues({ ...values, [prop]: event.target.value });
//   };

//   const handleClickShowPassword = () => {
//     setValues({ ...values, showPassword: !values.showPassword });
//   };

//   const handleMouseDownPassword = (event) => {
//     event.preventDefault();
//   };
//   const [valuess, setValuess] = React.useState({
//     passwords: "",
//     showPasswords: false,
//   });

//   const handleChanges = (propp) => (event) => {
//     setValuess({ ...valuess, [propp]: event.target.value });
//   };

//   const handleClickShowPasswords = () => {
//     setValuess({ ...valuess, showPasswords: !valuess.showPasswords });
//   };

//   const handleMouseDownPasswords = (event) => {
//     event.preventDefault();
//   };
//   const [valuesss, setValuesss] = React.useState({
//     passwordss: "",
//     showPasswordss: false,
//   });

//   const handleChangess = (proppp) => (event) => {
//     setValuesss({ ...valuesss, [proppp]: event.target.value });
//   };

//   const handleClickShowPasswordss = () => {
//     setValuesss({ ...valuesss, showPasswordss: !valuesss.showPasswordss });
//   };

//   const handleMouseDownPasswordss = (event) => {
//     event.preventDefault();
//   };
//   console.log(values,valuess,valuesss,"changepassword");
//   const handleSubmit = (e) => {
//     e.preventDefault()
//     var data = JSON.stringify({
//       "password": "values",
//       "newPassword": "valuess",
//       "newPassword": "valuesss"

//     });
//     let tokens=localStorage.getItem("tokens")
    
//     var config = {
//       method: 'post',
//       url: 'https://neostore-api.herokuapp.com/api/user/change-password',
//       headers: { 
//         'Authorization':  `${tokens}`, 
//         'Content-Type': 'application/json'
//       },
//       data : data
//     };
    
//     axios(config)
//     .then(function (response) {
//       console.log(JSON.stringify(response.data));
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
    

//   };

//   return (
//     <div className={classes.root}>
//       <div>
//         <div>
//         <i className="fa fa-arrows-h mr-1 "></i>  
//           <Link data-toggle="modal" data-target="#formpassword">
//               Change Password
//           </Link>
//         </div>

//         <div
//           className="modal fade"
//           id="formpassword"
//           tabindex="-1"
//           role="dialog"
//           aria-labelledby="exampleModalLabel"
//           aria-hidden="true"
//         >
//           <div className="modal-dialog modal-dialog" role="document">
//             <div className="modal-content ">
//               <div className="modal-header  border-bottom-0">
                
//                 <button
//                   type="button"
//                   className="close"
//                   data-dismiss="modal"
//                   aria-label="Close"
//                 >
//                   <span aria-hidden="true">&times;</span>
//                 </button>
//               </div>
//               <h5 className="modal-title " id="exampleModalLabel">
//                   Change Password
//                 </h5>
//               <form onClick={handleSubmit}>
//                 <div className="modal-body">
//                   <FormControl>
                  
//                     <OutlinedInput
//                         placeholder=" Old  Password"
//                       className={clsx(classes.margin, classes.textField)}
//                       id="outlined-adornment-password1"
//                       type={values.showPassword ? "text" : "password"}
//                       value={values.password}
//                       onChange={handleChange("password")}
//                       endAdornment={
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPassword}
//                             onMouseDown={handleMouseDownPassword}
//                           >
//                             {values.showPassword ? (
//                               <Visibility />
//                             ) : (
//                               <VisibilityOff />
//                             )}
//                           </IconButton>
//                         </InputAdornment>
//                       }
//                     />

                  
//                     <OutlinedInput
//                     placeholder=" New  Password"
//                       className={clsx(classes.margin, classes.textField)}
//                       id="outlined-adornment-password2"
//                       type={valuess.showPasswords ? "text" : "password"}
//                       value={valuess.passwords}
//                       onChange={handleChanges("passwords")}
//                       endAdornment={
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPasswords}
//                             onMouseDown={handleMouseDownPasswords}
//                           >
//                             {valuess.showPasswords ? (
//                               <Visibility />
//                             ) : (
//                               <VisibilityOff />
//                             )}
//                           </IconButton>
//                         </InputAdornment>
//                       }
//                     />

                  
//                     <OutlinedInput
//                         placeholder=" Confirm Password"
//                       className={clsx(classes.margin, classes.textField)}
//                       id="outlined-adornment-password3"
//                       type={valuesss.showPasswordss ? "text" : "password"}
//                       value={valuesss.passwordss}
//                       onChange={handleChangess("passwordss")}
//                       endAdornment={
//                         <InputAdornment position="end">
//                           <IconButton
//                             aria-label="toggle password visibility"
//                             onClick={handleClickShowPasswordss}
//                             onMouseDown={handleMouseDownPasswordss}
//                           >
//                             {valuesss.showPasswordss ? (
//                               <Visibility />
//                             ) : (
//                               <VisibilityOff />
//                             )}
//                           </IconButton>
//                         </InputAdornment>
//                       }
//                     />
//                   </FormControl>
//                 </div>
//                 <div className="modal-footer border-top-0 d-flex justify-content-center">
//                   <button type="submit" className="btn btn-primary">
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
