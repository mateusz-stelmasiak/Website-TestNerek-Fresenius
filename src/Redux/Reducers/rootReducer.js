import {combineReducers} from 'redux'
import surveyReducer from "./surveyReducer";
import themeReducer from "./themeReducer";
import cookieReducer from "./cookieReducer";


//all reducers combined
const rootReducer = combineReducers({
    survey: surveyReducer,
    theme:themeReducer,
    cookie:cookieReducer
})


export default rootReducer;