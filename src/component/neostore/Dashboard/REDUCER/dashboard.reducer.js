import { GET_DASHBOARD_DATA,GET_DASHBOARD,SEARCH_DATA,LOADING } from "../CONSTANT/dashboard-module.constant";
const initialState={
    text:"",
    dashboard:[],
    loader:false,
    dashboardata:[]
}
export default function(state=initialState,action){
    //console.log(action.type)
    //console.log(state,"initialstate")
    switch(action.type){
            case SEARCH_DATA:
                return{
                    ...state,
                    text:action.payload,
                    loader:false
                }
                case GET_DASHBOARD_DATA:
                    //console.log("after",state)
                    return {
        
                        ...state,
                        dashboardata:action.payload,
                        loader:false
        
                    }
                case GET_DASHBOARD:
                    return{
                        ...state,
                        text:action.payload,
                        loader:false
                    }
                    case LOADING:
                        return{
                            ...state,
                            loader:true
                        }
            default:
                return state;

    }
    
    

}