import {combineReducers} from 'redux'
import surveyReducer from "./surveyReducer";
import themeReducer from "./themeReducer";


//all reducers combined
const rootReducer = combineReducers({
    survey: surveyReducer,
    theme:themeReducer
})


export default rootReducer;