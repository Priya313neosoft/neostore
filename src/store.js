import {createStore,applyMiddleware,compose } from "redux";
import rootreducer from "./component/neostore/Dashboard/REDUCER/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
const store=createStore(rootreducer,compose(applyMiddleware(thunk),composeWithDevTools()));
export default store;