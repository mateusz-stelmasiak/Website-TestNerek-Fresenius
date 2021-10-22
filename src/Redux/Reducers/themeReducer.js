import * as actions from '../Actions/themeActions'
import {SET_HIGH_CONTRAST} from "../Actions/themeActions";

export const themeInitialState = {
    highContrast: sessionStorage.getItem('highContrast')!== null  ?
        (sessionStorage.getItem('highContrast') === 'true' ):
        false,
}

export default function themeReducer(state = themeInitialState, action) {
    switch (action.type) {
        case SET_HIGH_CONTRAST:
            sessionStorage.setItem('highContrast',action.payload);
            console.log( sessionStorage.getItem('highContrast'));
            return {...state, highContrast: action.payload};
        default:
            return state
    }
}
