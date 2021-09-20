import "../Survey/BloodParameters/BloodParametersQuestion.css"
import QuestionTitle from "../Survey/QuestionTitle";
import React, {useEffect, useState} from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import PersonalInfoQuestion from "../Survey/PersonalInfoQuestion";
import SurveyQuestion from "../Survey/SurveyQuestion";
import {choiceQuestions,bloodResults} from "../../JSBackend";
import BloodParameterInput from "../Survey/BloodParameters/BloodParameterInput";


function BloodResultsQuestion({qId,dispatch,id}){
    const questions = bloodResults;
    const [qComponents, setQComponents] = useState();
    const [loading, setLoading] = useState(true)

    //on first load prepares react components for all questions
    useEffect(() => {
        setLoading(true)
        let qComps = [];
        let startingIndex=qId;
        questions.forEach((question, index) => {
            let qComp =
                <BloodParameterInput
                    key={startingIndex}
                    qId={startingIndex}
                    pName={question.name}
                    pNorms={question.normForUnits}
                    pUnits={question.possibleUnits}
                />;
            qComps.push(qComp)
            startingIndex+=1;
        })
        setQComponents(qComps);
        setLoading(false)
    }, [])




    return (
        <div id={id} className="SurveyQuestion BloodParametersQuestion">
            <QuestionTitle qId={qId}>
                Proszę podać wyniki <u>parametrów krwi</u> otrzymane z laboratorium
            </QuestionTitle>
            {qComponents}

        </div>
    );
}

export default connect()(BloodResultsQuestion)