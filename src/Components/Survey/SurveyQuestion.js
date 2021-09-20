import React, {useEffect, useState} from "react";
import {selectAnswers} from "../../Redux/Actions/surveyActions";
import {connect} from "react-redux";
import "./SurveryQuestion.css"
import {Form} from "react-bootstrap";
import QuestionTitle from "./QuestionTitle";

function SurveyQuestion({qId, qText, answers, dispatch, currAnswers}) {
    //holds chosen indices answers in an array
    const [chosenAnswer, setChosenAnswer] = useState(undefined)

    useEffect(() => {
        setChosenAnswer(undefined);
        if (currAnswers[qId] === undefined) return;
        setChosenAnswer(currAnswers[qId]);
    }, [qId])


    function toggleAnswer(aIndex) {
        setChosenAnswer(aIndex);
        //save answers to the store
        dispatch(selectAnswers(qId, aIndex));
    }

    var invalidListener = function(){ this.scrollIntoView(true); };

    const answersElements = answers.map((ans, index) => {
        return (
            <div key={index} className='SurveyAnswer'>
                <input
                    type="radio"
                    name={qId}
                    value={index}
                    onChange={() => {
                        toggleAnswer(index)
                    }}
                    checked={chosenAnswer === index}
                    required/>
                <Form.Label>{ans}</Form.Label>
            </div>
        );
    })

    return (
        <div className='SurveyQuestion'>
            <QuestionTitle qId={qId}>{qText}</QuestionTitle>
            <Form.Group className='SurveyAnswers'>
                {answersElements}
            </Form.Group>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currAnswers: state.survey.answers,
    };
};


export default connect(mapStateToProps)(SurveyQuestion);