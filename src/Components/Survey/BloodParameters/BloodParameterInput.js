import React, {useState} from "react";
import {selectAnswers} from "../../../Redux/Actions/surveyActions";
import {connect} from "react-redux";
import "./BloodParameterInput.css"
import {Form} from "react-bootstrap";
import useWindowDimensions from "../../Common/useWindowDimensions"
import BloodParameterRange from "./BloodParameterRange"
import Explainer from "../Explainer";

function BloodParameterInput({qId, pName, pNorms, pUnits, explainer, dispatch}) {
    //holds chosen indices answers in an array
    const [show, setShow] = useState(false);
    const [displayName, setDisplayName] = useState(pName)
    const [pLevel, setPLevel] = useState(undefined)
    const [chosenUnit, setChosenUnit] = useState(0)
    //viewport width and height from hook
    const {height, width} = useWindowDimensions();
    const [result, setResult] = useState("Opis wyniku")


    function setParamValue(paramValue) {
        //cap max digts
        if (paramValue > 9999) return

        setPLevel(paramValue);
        //save answers to the store
        paramValue > pNorms[chosenUnit] ? dispatch(selectAnswers(qId, 0)) : dispatch(selectAnswers(qId, 1));
    }

    function toogleShowInput() {
        //when selected adds : at the end of the parameters name
        !show ? setDisplayName(pName + ":") : setDisplayName(pName)
        setShow(!show);

    }

    return (
        <Form.Group className="BloodParamenterInput SurveyAnswer">
            <Form.Check
                type='checkbox'
                label={<span>{displayName}</span>}
                onChange={toogleShowInput}
            />
            {explainer &&
            <Explainer
                title={explainer.title}
                content={explainer.content}
            />
            }

            {show &&
            <Form.Group className="SurveyAnswer">
                <div className="FieldWithUnits">
                    <Form.Control
                        className="sixCharInput"
                        type="number"
                        value={pLevel}
                        onChange={(e) => setParamValue(e.target.value)}
                    />


                </div>

                {pUnits.length > 0 &&
                <Form.Group>
                    {width > 900 && <Form.Label>Jednostka: </Form.Label>}

                    <Form.Control as="select" onChange={(e) => setChosenUnit(e.target.value)}>
                        {pUnits.map((unit, index) => {
                            return <option key={index} value={index}>{unit}</option>
                        })}
                    </Form.Control>
                </Form.Group>
                }


                <BloodParameterRange
                    value={pLevel}
                    chosenUnit={chosenUnit}
                    norm={pNorms}
                />



            </Form.Group>
            }
        </Form.Group>


    );
}

export default connect()(BloodParameterInput);