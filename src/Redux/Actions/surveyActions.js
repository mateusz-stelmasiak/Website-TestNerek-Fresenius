export const SELECT_ANSWERS= 'SELECT_ANSWERS'
export const CALCULATE_RESULT='CALCULATE_RESULT'
export const CLEAR_RESULTS='CLEAR_RESULTS'
export const SET_AGE = 'SET_AGE'
export const SET_LOCATION = 'SET_LOCATION'
export const SET_ZIP = 'SET_ZIP'
export const SET_HEIGHT = 'SET_HEIGHT'
export const SET_WEIGHT = 'SET_WEIGHT'
export const SET_LAB_CODE = 'SET_LAB_CODE'

export const selectAnswers = (questionId, answers) => ({
    type: SELECT_ANSWERS,
    payload: {questionId:questionId,answers:answers}
})
export const calculateResult = (age) => ({
    type: CALCULATE_RESULT,
    payload:age
})
export const clearResults = () => ({
    type: CLEAR_RESULTS
})

export const setUserAge = (age) => ({
    type: SET_AGE,
    payload: age
})
export const setUserLocation = (location) => ({
    type: SET_LOCATION,
    payload: location
})
export const setUserZip = (zip) => ({
    type: SET_ZIP,
    payload: zip
})
export const setUserHeight = (height) => ({
    type: SET_HEIGHT,
    payload: height
})
export const setUserWeight = (weight) => ({
    type: SET_WEIGHT,
    payload: weight
})
export const setUserLabCode = (code) => ({
    type: SET_LAB_CODE,
    payload: code
})