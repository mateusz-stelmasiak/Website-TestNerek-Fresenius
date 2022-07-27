import "./BloodParametersQuestion.css"
import QuestionTitle from "../QuestionTitle";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {bloodParameters, choiceQuestions} from "../../../JSBackend";
import BloodParameterInput from "./BloodParameterInput";


function BloodParametersQuestion({qId,dispatch}){
    const questions = bloodParameters;
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
                    explainer={question.explainer}
                />;
            qComps.push(qComp)
            startingIndex+=1;
        })
        setQComponents(qComps);
        setLoading(false)
    }, [])




    return (
        <div className="SurveyQuestion BloodParametersQuestion">
            <QuestionTitle qId={qId}>
                Czy zna Pani/Pan poziom któregokolwiek z poniższych parametrów? Jeżeli tak, proszę podać wynik.
            </QuestionTitle>
            <p>możesz pominąć to pytanie, jeśli nie znasz lub nie pamiętasz wyników badań</p>
            {qComponents}
        </div>
    );
}
// {!loading && {qComponents}}

export default connect()(BloodParametersQuestion)