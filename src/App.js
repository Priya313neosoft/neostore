import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// LoginNeoScrum.......................................................
// import LoginNeoScrum from "./component/neoscrum-application/login-neoscrum";
// import Registration from "./component/neoscrum-application/registration-neoscrum";
// import NAVBAR from "./component/neoscrum-application/navbar";
// import Dashboard from "./component/neoscrum-application/dashboard";
// import AddFeedback from "./component/neoscrum-application/addFeedback";
// import Login from "./component/login";
// import RandomColor from "./component/neoscrum-application/randomColor";
// import Feedback from "./component/neoscrum-application/feedback";

// ....................neoscrum end.....................................................
// import Navbar from "./component/navbar";
//  import Register from "./component/register";
//  import listUser from "./component/listUser";
// import firstscreen from "./component/neoscrum-application/firstscreen";
// import secondscreen from "./component/neoscrum-application/secondscreen";
// import a from "./stateprops/a";
// import A from "./contextapi/aa"
// import Header from "./expensetracker/header";
// import Expensetracker from "./expensetracker/expensetracker";
// import Balance from "./expensetracker/balance";
// import Incomeexpense from "./expensetracker/incomeexpense";
// import {GlobalProvider} from "./expensetracker/context/globalState";
// import Transactionlist from "./expensetracker/transactionlist";

// ............................neostore.....start...............................................
import Header from "./component/neostore/Dashboard/dashboard-module/header";
import Login from "./component/neostore/Dashboard/user-module/login";
import Footer from "./component/neostore/Dashboard/dashboard-module/footer";
import CardBody from "./component/neostore/Dashboard/dashboard-module/cardbody";
import SimpleMap from "./component/neostore/Dashboard/dashboard-module/SimpleMap";
import Welcome from "./component/neostore/Dashboard/dashboard-module/welcome";
import Register from "./component/neostore/Dashboard/user-module/regiister";
import Recoverpassword from "./component/practice/recoverpassword";
import ForgetPssword from "./component/neostore/Dashboard/user-module/forgetPssword";
import Recover from "./component/neostore/Dashboard/user-module/recover";
import Productcards from "./component/neostore/Dashboard/product-module/Productcards";
import commonProduct from "./component/neostore/Dashboard/product-details/commonProduct";

import carts from "./component/neostore/Dashboard/cart-module/carts";
import mainorder from "./component/neostore/Dashboard/order-module/mainorder";
import Maincheckout from "./component/neostore/Dashboard/checkout-module/maincheckout";
import Paasswordchange from "./component/neostore/Dashboard/change-password/paasswordchange";

import Filter from "./component/neostore/Dashboard/product-module/product"
import UserProfile from "./component/neostore/Dashboard/my-account-module/userprofile";



function App() {
  return (
    <>
      <Router>
        {/* ..................neostore......................................    */}
        <Header />
        <Route path="/forgetpassword" component={ForgetPssword} />
        <Route path="/recoverpassword" component={Recoverpassword} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/locateus" component={SimpleMap} />
        <Route path="/login" component={Login} />
        <Route path="/" component={CardBody} exact />
        <Route path="/register" component={Register} />
        <Route path="/recover" component={Recover} />
        <Route path="/product" component={Productcards} />
        <Route path="/commonProduct" component={commonProduct} />
        <Route path="/cart" component={carts}/>
        <Route path="/order" component={mainorder}/>
        <Route path="/checkout" component={Maincheckout}/>
        <Route path="/passwordchange"component={Paasswordchange}/>
        {/* <Route path="/filter" component={Filter}/> */}
 <Route path="/profile" component={UserProfile}/>
        {/* <Route path="/Login-neoscrum" component={LoginNeoScrum}/> */}
        <Footer />

        {/* neoscrum  route   .................................................. */}
        {/* <NAVBAR/>  
       <Route path="/feedback" component={Feedback}/>
       <Route path="/randomcolor" component={RandomColor}/>  
       
         <Route path="/register-neoscrum" component={Registration}/>
         <Route path="/dashboard" component={Dashboard}/>
         <Route path="/addFeedback" component={AddFeedback}/>
         <Route path="/login" component={Login} /> */}
        {/* neoscrum..................................................................  */}
        {/* <Route path="/secondscreen" component={secondscreen}/>
       <Route path="/firstscreen" component={firstscreen}/>
          {/* <GlobalProvider>
      </GlobalProvider> */}
        {/* <Header/>
        <Balance/>
        <Expensetracker/>
        <Incomeexpense/>
        <Transactionlist/> */}
        {/* <Navbar /> */}
        {/* <Route path="/listUser" component={listUser}/> */}
        {/* <Route path="/register" component={Register}/> */}
        {/* <Route path="/a" component={a}/> */}
        {/* <Route path="/contexta" component={A}/> */}
        {/* <Route path="/header" component={header}/> */}
        {/* <Route path="/expensetracker" component={expensetracker}/>
        <Route path="/balance" componenet={balance}/>
        <Route path="/incomeexpense" componenet={incomeexpense}/> */}
      </Router>
    </>
  );
}

export default App;
