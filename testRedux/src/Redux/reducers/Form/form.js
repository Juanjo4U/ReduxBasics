import { SALUDO } from "../../actions/types";

// "greeting" sera el nombre que le pondremos a este "state" a la hora de combinar los "reducers"

const initialState = {}; // este es el valor inicial de este "state"

export default (state = initialState, action) =>{
    // "action.type" es el identificador del "action" que llega
    // "action.payload" es el valor del "action" que llega
    switch (action.type) {
        case SALUDO: // aqui se coge la action con el identificador "SALUDO"
            console.log(`llega al reducer con el valor ${action.payload}`);
            
            // se retorna el objeto al state
            return{
                ...state, // "...state" es para mantener los valores anteriores del "state" en este caso ("state.greting")
                name: action.payload, // se añade o modifica una propiedad del "state" en este caso ("state.greeting.name")
            }
    
        default: 
            return state; // se retorna el "state"("state.greeting") sin modificar nada
    }
}