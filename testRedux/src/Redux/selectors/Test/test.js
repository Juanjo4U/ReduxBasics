import { createSelector } from "reselect";

const getGreeting = state => state.test.testGreeting;
const getUsername = state => state.greeting.name ? state.greeting.name: '';

export default createSelector(
    [getGreeting,getUsername],
    (greet, name) => name + greet,
)