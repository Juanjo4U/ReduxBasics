import { connect } from "react-redux";

/********************************************************************************************
importamos el componente al cual se le conectara con "mapStateToProps" y "mapDispatchtoProps"
y cuando lo quieras visualizar importas este "container"(que ya incluye el componente) y
NO el componente en si. 
********************************************************************************************/
import Form from "../../../Components/Form/form";

// importamos los actions que necesitemos
import { Greeting } from "../../actions/Form/form";

// importamos los selector que usemos
import Title from "../../selectors/Form/form"; // info de los selectors https://github.com/reduxjs/reselect

/************************************************************************************
"mapStateToProps" recibe como parametro de entrada el "state"
que contiene todos los "state" de los "reduces"
y retorna un objeto cuyas propiedades tienen los valores del "state" que necesitemos
en este caso del "state greeting" que tiene como una de sus propiedades "name"
que es el valor que se le asignara a "Title"
************************************************************************************/
const mapStateToProps = state =>{
    return{
        //keyWord : valor a devolver del "state" que se necesite
        txtTitle: Title(state),
    }
}
/**********************************************************************************************************
 "mapDispatchtoProps" recibe como parametro de entrada el "dispatch"(que se encarga de ejecutar los actions)
 y retorna un objeto cuyas propiedades tienen como valor una funcion 
 que retorna el "dispatch" del "action" que se necesite
 ********************************************************************************************************/
const mapDispatchtoProps = dispatch => {
    return{
        //keyword : funcion que ejecuta el "dispatch" para los "actions"
        Greeting : (name) => dispatch(Greeting(name)),
    }
}
/**************************************************************************
aqui es donde pasamos mapStateToProps y mapDispatchtoProps como parametros 
para el componente que necesitemos en este caso "Form"
****************************************************************************/
export default connect(mapStateToProps,mapDispatchtoProps)(Form)