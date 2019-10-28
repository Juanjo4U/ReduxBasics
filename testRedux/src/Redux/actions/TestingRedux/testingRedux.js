import { TESTING } from "../types";

export const testing = () => {
    return {
        type: TESTING,
        payload: `action de TestingRedux`
    }
}