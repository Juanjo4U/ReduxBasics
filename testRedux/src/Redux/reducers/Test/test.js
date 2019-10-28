import { TEST } from "../../actions/types";

const initialState = {
    testGreeting:` un saludo desde el state de TEST`
};

export default (state = initialState, action) =>{
    switch (action.type) {
        case TEST:
            console.log(`llega al reducer de TEST`);
            return{
                ...state,
                test: 'se logro meter en el state',
            }
    
        default: 
            return state
    }
}