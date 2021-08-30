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
// import Recoverpassword from "./component/practice/recoverpassword";
import ForgetPssword from "./component/neostore/Dashboard/user-module/forgetPssword";
import Recover from "./component/neostore/Dashboard/user-module/recover";
import Productcards from "./component/neostore/Dashboard/product-module/Productcards";
import commonProduct from "./component/neostore/Dashboard/product-details/commonProduct";
import carts from "./component/neostore/Dashboard/cart-module/carts";
import mainorder from "./component/neostore/Dashboard/order-module/mainorder";
import Maincheckout from "./component/neostore/Dashboard/checkout-module/maincheckout";
import UserProfile from "./component/neostore/Dashboard/my-account-module/userprofile";
import UserprofileeEdit from "./component/neostore/Dashboard/my-account-module/userprofileeEdit";
import ChangePassword from "./component/neostore/Dashboard/change-password/ChangePassword";
import PrivateRoute from "./component/neostore/Dashboard/common/privateRoute"
import Error from "./component/neostore/Dashboard/common/error";
import cardbody from "./component/neostore/Dashboard/dashboard-module/cardbody";
// import CommonProduct from "./component/neostore/Dashboard/product-details/commonProduct";

function App() {
 
  return (
    <>
    
      <Router>
        {/* ..................neostore......................................    */}
        <Header />
       <Switch>
      
        <Route path="/welcome" component={Welcome} />
        <Route path="/locateus" component={SimpleMap} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={CardBody} exact />
        <Route path="/register" component={Register} />
        <Route path="/product" component={Productcards} />
        {/* <Route path="/commonProduct" component={commonProduct} /> */}
        <Route path="/home/:_id" component={commonProduct}/>
        <PrivateRoute path="/recover" component={Recover} />
        <PrivateRoute path="/cart" component={carts}/>
        <PrivateRoute path="/order" component={mainorder}/>
        <PrivateRoute path="/checkout" component={Maincheckout}/>
        <PrivateRoute path="/passwordchange" component={ChangePassword}/>
        <PrivateRoute path="/profile" component={UserProfile}/>
        <PrivateRoute path="/editprofile" component={UserprofileeEdit}/>
        <Route path="/forgetpassword" component={ForgetPssword} />
        {/* <PrivateRoute path="/recoverpassword" component={Recoverpassword} /> */}
        <Route path="*" component={Error}/>
        </Switch>    
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
