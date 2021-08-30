import axios from "axios";
import { GET_DASHBOARD_DATA,GET_DASHBOARD,SEARCH_DATA,LOADING } from "../CONSTANT/dashboard-module.constant";
export function getdashboard(textx) {
  console.log(textx,"iddd")
  return (dispatch) => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
      headers: {},
    };
    axios(config).then(function (response) {
      console.log(textx,"iddd")
      // console.log(JSON.stringify(response.data),"action");
      // ?response.data.data.docs.filter((fildata)=>fildata.name.includes(textx)):
      const  dashbdata=response.data.data.docs
    
      const  dashboarddata = dashbdata.map((item1) => {
        
        return {
          ...item1,
        };
      });
      // console.log("after",dashboarddata)

      dispatch(getdashboarddata(dashboarddata));
    });
  };
}
// reducers
export const getdashboarddata=(data)=>({ 
    type:GET_DASHBOARD_DATA,
    payload:data
   
})

export const searchdata=text=>dispatch=>{
  dispatch({
    type:SEARCH_DATA,
    payload:text
  })
}
export const setLoading=()=>{
  return{
    type:LOADING
  }
};
export const dashboard=()=>{
  return{
    type:GET_DASHBOARD

  }

}
