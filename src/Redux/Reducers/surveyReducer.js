// Import all actions
import * as actions from '../Actions/surveyActions'
import {calculateSurveyResult} from "../../JSBackend";
import {SET_AGE, SET_HEIGHT, SET_LAB_CODE, SET_WEIGHT, SET_ZIP} from "../Actions/surveyActions";
import {User} from "../../Utils";

let defaultUser=new User(undefined,undefined,undefined,undefined,undefined);

export const surveyInitialState = {
    //var backed up to session storage to allow reloads of website with data retention
    userData:sessionStorage.getItem('userData')?JSON.parse(sessionStorage.getItem('userData')): defaultUser,
    labCode:sessionStorage.getItem('labCode') ? sessionStorage.getItem('labCode'):undefined,
    answers:sessionStorage.getItem('answersState') ? JSON.parse(sessionStorage.getItem('answersState')):[],
    surveyResult: sessionStorage.getItem('surveyResult') ? JSON.parse(sessionStorage.getItem('surveyResult')):undefined,
};

export default function surveyReducer(state = surveyInitialState, action) {
    let currUser= state.userData
    switch (action.type){
        case actions.SELECT_ANSWERS:
            let modifiedAnswers=state.answers;
            let questionId=action.payload.questionId;
            let answers=action.payload.answers;
            modifiedAnswers[questionId]=answers;
            sessionStorage.setItem('answersState',JSON.stringify(modifiedAnswers));
            return {...state, answers: modifiedAnswers};

        //calculates kidney age and clears answers
        case actions.CALCULATE_RESULT:
            //if there is nothing to recalculate the result from
            if (state.answers.length===0) return {...state}
            let finalAnswers=state.answers;
            sessionStorage.removeItem('answersState');
            let result=calculateSurveyResult(finalAnswers,state.userData);
            sessionStorage.setItem('surveyResult',JSON.stringify(result));
            return {...state,  answers: [],surveyResult:result};
        case actions.CLEAR_RESULTS:
            sessionStorage.removeItem('surveyResult');
            return {...state,surveyResult:undefined};
        case SET_AGE:
            currUser.age = action.payload;
            sessionStorage.setItem('userData', JSON.stringify(currUser));
            return {...state, userData: currUser};
        case SET_WEIGHT:
            currUser.weight = action.payload;
            sessionStorage.setItem('userData', JSON.stringify(currUser));
            return {...state, userData: currUser};
        case SET_ZIP:
            currUser.zip = action.payload;
            sessionStorage.setItem('userData', JSON.stringify(currUser));
            return {...state, userData: currUser};
        case SET_HEIGHT:
            currUser.height = action.payload;
            sessionStorage.setItem('userData', JSON.stringify(currUser));
            return {...state, userData: currUser};
        case SET_LAB_CODE:
            sessionStorage.setItem('labCode', action.payload);
            return {...state, labCode: action.payload};
        default:
            return state
    }
}