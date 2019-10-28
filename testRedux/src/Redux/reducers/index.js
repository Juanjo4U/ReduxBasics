import { combineReducers } from "redux";
import greeting from "./Form/form";
import test from "./Test/test";
import testingRedux from "./TestingRedux/testingRedux";
/*******************************************************
aqui importamos y combinamos todos los reducers
con el nombre del "state" con los cuales se identificaran,
nos viene bien para obtener el valor del "state"
que necesitemos en los "containers"
********************************************************/
export default combineReducers({
    greeting, // en este caso le asigno el mismo nombre con el que lo importe
    testingRedux, 
    test: test, // en este casi le asigno el nombre "test"
})