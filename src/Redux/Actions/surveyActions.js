export const SELECT_ANSWERS= 'SELECT_ANSWERS'
export const CALCULATE_RESULT='CALCULATE_RESULT'
export const CLEAR_RESULTS='CLEAR_RESULTS'


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



