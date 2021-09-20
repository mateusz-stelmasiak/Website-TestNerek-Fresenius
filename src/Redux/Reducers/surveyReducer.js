// Import all actions
import * as actions from '../Actions/surveyActions'
import {calculateSurveyResult} from "../../JSBackend";

export const surveyInitialState = {
    //var backed up to session storage to allow reloads of website with data retention
    answers:sessionStorage.getItem('answersState') ? JSON.parse(sessionStorage.getItem('answersState')):[],
    surveyResult: sessionStorage.getItem('surveyResult') ? JSON.parse(sessionStorage.getItem('surveyResult')):undefined,

};

export default function surveyReducer(state = surveyInitialState, action) {
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
            let result=calculateSurveyResult(finalAnswers,action.payload);
            sessionStorage.setItem('surveyResult',JSON.stringify(result));
            return {...state,  answers: [],surveyResult:result};

        case actions.CLEAR_RESULTS:
            sessionStorage.removeItem('surveyResult');
            return {...state,surveyResult:undefined};
        default:
            return state
    }
}