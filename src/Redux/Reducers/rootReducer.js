import {combineReducers} from 'redux'
import surveyReducer from "./surveyReducer";
import userReducer from "./userReducer";

//all reducers combined
//TODO join user ans survey reducers, makes shit easier
const rootReducer = combineReducers({
    survey: surveyReducer,
})


export default rootReducer;