import axios from "axios";
import { GET_DASHBOARD_DATA } from "../CONSTANT/dashboard-module.constant";
export function getdashboard() {
  return (dispatch) => {
    var config = {
      method: "get",
      url: "https://neostore-api.herokuapp.com/api/product",
      headers: {},
    };
    axios(config).then(function (response) {
      console.log(JSON.stringify(response.data));
      let dashboarddata = response.data.data.map((item1) => {
        return {
          ...item1,
        };
      });
      dispatch(getdashboarddata(dashboarddata));
    });
  };
}
// reducers
export const getdashboarddata=(data)=>({
    type:GET_DASHBOARD_DATA,
    payload:data
})
