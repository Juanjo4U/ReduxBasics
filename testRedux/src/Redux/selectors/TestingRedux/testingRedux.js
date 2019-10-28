import { createSelector } from "reselect";

const welcome = state => state.testingRedux.welcome;
const getUsername = state => state.greeting.name ? state.greeting.name: '';

export default createSelector(
    [welcome,getUsername],
    (welcome,name) => welcome + name,
)