import { connect } from "react-redux";
import { Testing } from "../../actions/TestingRedux/testingRedux";
import TestingRedux from "../../../Screens/testingRedux/testingRedux";
import Welcome from "../../selectors/TestingRedux/testingRedux";

const mapStateToProps = state =>{
    return{
        //keyWord : valor a devolver
        welcome: Welcome(state),
    }
}

const mapDispatchtoProps = dispatch => {
    return{
        //keyword : funcion que ejecuta el dispatch para los actions
        Testing: _=> dispatch(Testing())
    }
}

export default connect(mapStateToProps,mapDispatchtoProps)(TestingRedux)