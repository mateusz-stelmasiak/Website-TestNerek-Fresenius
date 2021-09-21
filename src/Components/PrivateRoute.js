//redirects to login if user is not authenticated
import {Redirect, Route} from "react-router-dom";
import {connect} from "react-redux";



const PrivateRoute = ({ age,surveyResult,answers,component: Component, ...rest }) =>
{
    return (
        <Route {...rest} render={props => (
            ((age!==undefined) || surveyResult!==undefined)
                ? <Component {...props} />
                : <Redirect to={{ pathname: process.env.REACT_APP_TOKEN+'/test', state: { from: props.location } }} />
        )} />
    );
}
// Map Redux state to React component props
const mapStateToProps = (state) => {
    return {
        age: state.survey.userData.age,
        answers: state.survey.answers,
        surveyResult: state.survey.surveyResult,
    };
};
// Connect Redux to React
export default connect(mapStateToProps)(PrivateRoute)