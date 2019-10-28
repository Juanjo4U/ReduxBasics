import { TESTING } from "../../actions/types";

const initialState = {
    welcome: 'BienVenido ',
    hi: 'hola '
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TESTING:
            return{
                ...state,
                testingRedux: action.payload,
            }

        default:
            return state;
    }
}