import "./PersonalnfoQuestion.css"
import QuestionTitle from "./QuestionTitle";
import React, {useState} from "react";
import {Form} from "react-bootstrap";
import {connect} from "react-redux";
import {latOrLata} from "../../JSBackend";
import {setUserAge, setUserHeight, setUserWeight, setUserZip} from "../../Redux/Actions/surveyActions";
import Explainer from "./Explainer";


let incompleteZipRegex = /^(([0-9]{0,2})|([0-9]{2}-[0-9]{0,3}))$/;
let firstHalfZipRegex = /^[0-9]{0,2}$/;
let secondHalfZipRegex= /^[0-9]{0,3}$/;

function PersonalInfoQuestion({qId, userData, dispatch}) {
    const [age, setAge] = useState()
    const [zipFirstHalf,setZipFirstHalf]=useState();
    const [zipSecondHalf,setZipSecondtHalf]=useState();
    const [zipCode, setZipCode] = useState()
    const [isZipValid, setIsZipValid] = useState(false);
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()

    function validateAge(age) {
        if (age < 0) return;
        if (age > 130) return;

        setAge(age);
        dispatch(setUserAge(age));
    }

    function validateZipFirstHalf(zipFH) {
        if (!zipFH.match(firstHalfZipRegex)) return;
        setZipFirstHalf(zipFH);
    }

    function validateZipSecondHalf(zipSH){
        if (!zipSH.match(secondHalfZipRegex)) return;

        setZipSecondtHalf(zipSH);
        let zip=zipFirstHalf+'-'+zipSH;
        dispatch(setUserZip(zip));
    }


    function validateHeight(height) {
        if (height < 0) return;
        if (height > 280) return;

        setHeight(height);
        dispatch(setUserHeight(height));
    }

    function validateWeight(weight) {
        if (weight < 0) return;
        if (weight > 450) return;

        setWeight(weight);
        dispatch(setUserWeight(weight));
    }


    return (
        <div className="PersonalInfoQuestion SurveyQuestion">
            <QuestionTitle qId={qId}>Podstawowe informacje</QuestionTitle>

            <Form.Group className="SurveyAnswer">
                <Form.Label>Wiek: </Form.Label>
                <div className="FieldWithUnits">
                    <Form.Control
                        autoFocus
                        className="threeCharInput"
                        required
                        name="age"
                        type="number"
                        value={age}
                        onChange={(e) => validateAge(e.target.value)}
                    />
                    <Form.Label className="units">{age === "" ? "lat" : latOrLata(age)}</Form.Label>
                </div>
            </Form.Group>

            <Form.Group className="SurveyAnswer">
                <Form.Label>Kod pocztowy: </Form.Label>
                <div className="FieldWithUnits">
                    <Form.Control
                        className="zipFHInput"
                        name="zip"
                        type="number"
                        value={zipFirstHalf}
                        onChange={(e) => validateZipFirstHalf(e.target.value)}
                    />
                    <span className="zipHyphen">-</span>
                    <Form.Control
                        className="zipSHInput"
                        name="zip"
                        type="number"
                        value={zipSecondHalf}
                        onChange={(e) => validateZipSecondHalf(e.target.value)}
                    />
                    <Explainer
                        title="Dlaczego pytamy?"
                        content=
                        "Pytamy o kod pocztowy, ponieważ w wybranych
                        powiatach pacjenci, którzy wypełnią test i
                        ich nerki będą potrzebowały kontroli, dostaną indywidualny
                        kod na bezpłatne badania nerek (kreatynina we krwi i badanie moczu)
                        do miejscowego laboratorium."
                    />
                </div>
            </Form.Group>

            <Form.Group className="SurveyAnswer">
                <Form.Label>Wzrost: </Form.Label>

                <div className="FieldWithUnits">
                    <Form.Control
                        className="threeCharInput"
                        required
                        name="height"
                        type="number"
                        value={height}
                        onChange={(e) => validateHeight(e.target.value)}
                    />
                    <Form.Label className="units">cm</Form.Label>
                </div>

            </Form.Group>

            <Form.Group className="SurveyAnswer">
                <Form.Label>Masa ciała: </Form.Label>
                <div className="FieldWithUnits">
                    <Form.Control
                        className="threeCharInput"
                        required
                        name="weight"
                        type="number"
                        value={weight}
                        onChange={(e) => validateWeight(e.target.value)}
                    />
                    <Form.Label className="units">kg</Form.Label>
                </div>
            </Form.Group>

        </div>
    );
}

//unsure forms
// <Form.Group  className="SurveyAnswer">
//     <Form.Label>Miejsce zamieszkania: </Form.Label>
//     <Form.Control as="select" onChange={(e) => setLocation(e.target.value)}>
//         <option value="0">{Location.cottage.text}</option>
//         <option value="1">{Location.smallTown.text}</option>
//         <option value="2">{Location.largeTown.text}</option>
//     </Form.Control>
// </Form.Group>

const mapStateToProps = (state) => {
    return {
        userData: state.survey.userData
    };
};
export default connect(mapStateToProps)(PersonalInfoQuestion)