import {combineReducers} from 'redux'
import surveyReducer from "./surveyReducer";


//all reducers combined
const rootReducer = combineReducers({
    survey: surveyReducer,
})


export default rootReducer;