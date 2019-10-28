import { createStore, applyMiddleware } from "redux";
//rootReducer lo coge del "index.js"(es el que se encarga de combinar los "reducers") de la carpeta reducers
import rootReducer from './reducers';
import logger from "redux-logger";
import ReduxThunk from "redux-thunk";

//aqui es donde se crea el "Store" y le pasamos los "reducers"(que tienen los "state") y aplicamos los "middleware"
export default _=> createStore(rootReducer, applyMiddleware(ReduxThunk,logger));

/**************************************************************************************
"logger" nos permitira visualizar por la consola todo lo que este pasando en "redux"
por ejemplo los "actions" que se ejecutan, el valor anterior del "State" y su nuevo valor
**************************************************************************************/