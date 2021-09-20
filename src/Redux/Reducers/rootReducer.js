import {combineReducers} from 'redux'
import surveyReducer from "./surveyReducer";
import userReducer from "./userReducer";

//all reducers combined
const rootReducer = combineReducers({
    user:userReducer,
    survey: surveyReducer,
})


export default rootReducer;