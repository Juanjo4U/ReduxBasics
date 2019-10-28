import React from 'react';
import { Tabs, Tab } from "native-base";
// aqui se importa el Provider que debe contener todos los "CONTAINERS" que quieran acceder al "STORE"
import { Provider } from "react-redux";

// aqui se importa el Store
import Store from "./Redux/configureStore";

/*****¡¡¡¡¡¡Aqui se importa el "container del componente" y NO el componente!!!!!!!******/
import TestingReduxContainer from "./Redux/containers/TestingRedux/testingRedux";

// si importas el componente en si, "NO" tendras acceso al "state"
import TestinReduxComponent from "./Screens/testingRedux/testingRedux";


export default _ => {
    const store = Store(); // se asigna el "Store" a la variable store
    return (
        <Provider store={store}>
            <Tabs>
                {/* aqui se podra ver "BienVenido + ${valor introducido en el Input}" */}
                <Tab heading='reduxContainer'>
                    <TestingReduxContainer />
                </Tab>
                {/* aqui NO se vera "BienVenido ni ${valor introducido en el Input}"" */}
                <Tab heading='reduxComponent'>
                    <TestinReduxComponent />
                </Tab>
            </Tabs>
        </Provider>
    );
}
