import {User} from "../../Utils";
import {SET_AGE, SET_HEIGHT, SET_LAB_CODE, SET_WEIGHT, SET_ZIP} from "../Actions/surveyActions";

let defaultUser=new User("","","","","","","","");
export const userInitialState = {
    userData:sessionStorage.getItem('userData')?JSON.parse(sessionStorage.getItem('userData')): defaultUser,
    labCode:sessionStorage.getItem('labCode') ? sessionStorage.getItem('labCode'):undefined
    //backed up to session storage to allow reloads of website with data retention
};

export default function userReducer(state = userInitialState, action) {
    let currUser= state.userData
    switch (action.type){
        case SET_AGE:
            currUser.age= action.payload;
            sessionStorage.setItem('userData',JSON.stringify(currUser));
            return {...state, userData:currUser};
        case SET_WEIGHT:
            currUser.weight= action.payload;
            sessionStorage.setItem('userData',JSON.stringify(currUser));
            return {...state, userData:currUser};
        case SET_ZIP:
            currUser.zip= action.payload;
            sessionStorage.setItem('userData',JSON.stringify(currUser));
            return {...state, userData:currUser};
        case SET_HEIGHT:
            currUser.height= action.payload;
            sessionStorage.setItem('userData',JSON.stringify(currUser));
            return {...state, userData:currUser};
        case SET_LAB_CODE:
            sessionStorage.setItem('labCode',action.payload);
            return {...state,labCode:action.payload};
        default:
            return state
    }
}

