import { createSelector } from "reselect";

// aqui se cogen los valores del state que se necesiten
const getUserName = state => state.greeting.name ? state.greeting.name : '';
const getText = state => state.testingRedux.hi;

// aqui se realiza un proceso con la funcion para retornar el valor que se necesite
export default createSelector(
    [getUserName, getText], // estos son los valores que se cogen de los state
    (name, text) => text + name, /* aqui se recibe como parametros los valores se cogieron de los state
                                 y  se los procesa para que retorne lo que se necesite
                                 por ejemplo se puede hacer la media de dos valores, etc. */
);