import { SALUDO } from "../types";

export const saludado = (name) => {
    console.log(`pasamos al reducer desde el action el valor ${name}`)
    return {
        type: SALUDO, // valor con el cual se identificara en los reducers
        payload: name // valor que se pasara a los reducers
    }
}

// dispatch se usa para ejecutar los actions que se necesiten
export const Greeting = (name) => (dispatch, getState) => {
        console.log(`hola ${name} acabas de llegar a los actions`);
        dispatch(saludado(name))
    }