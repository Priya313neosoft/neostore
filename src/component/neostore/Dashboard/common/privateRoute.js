import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import {Authentication} from "./authentication"
function PrivateRoute({component:Component,...rest}) {
    return (
        <>
        <Route
        {...rest}
        render={props=>
        Authentication() ?(<Component{...props}/>) :( <Redirect to={{pathname:"/login",state:{from:props.location}}}/>)}

        
        
        />
            
        </>
    )
}

export default PrivateRoute
