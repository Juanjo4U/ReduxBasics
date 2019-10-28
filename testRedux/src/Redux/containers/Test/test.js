import { connect } from "react-redux";
import { Testing } from "../../actions/Test/test";
import Test from "../../../Components/Test/test";
import Saludo from "../../selectors/Test/test";

const mapStateToProps = state =>{
    return{
        //keyWord : valor a devolver
        testGreeting: Saludo(state),
    }
}

const mapDispatchtoProps = dispatch => {
    return{
        //keyword : funcion que ejecuta el dispatch para los actions
        Testing: _=> dispatch(Testing())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(Test)