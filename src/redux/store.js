import {createStore, applyMiddleware, compose} from "redux";
import ThunkMiddleware  from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore (
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware)) //esta linea sirve para que podamos hacer peticiones a una API/server
); 


export default store;