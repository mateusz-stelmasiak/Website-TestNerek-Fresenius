import "./SurveyPage.css"
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import SurveyQuestion from "./Survey/SurveyQuestion";
import {choiceQuestions} from "../JSBackend";
import {useHistory} from "react-router-dom";
import {Form} from "react-bootstrap";
import PersonalInfoQuestion from "./Survey/PersonalInfoQuestion";
import BloodParametersQuestion from "./Survey/BloodParameters/BloodParametersQuestion";
import {clearResults} from "../Redux/Actions/surveyActions";
import ScrollProgressBar from "./Survey/ScrollProgressBar";
import ScrollToSectionComponent from "./Common/ScrollToSectionComponent"
import Layout from "./Common/Layout";
import ReactPixel from 'react-facebook-pixel';
import {Helmet} from "react-helmet";

function SurveyPage({dispatch}) {
    const questions = choiceQuestions;
    const [qComponents, setQComponents] = useState();
    const [loading, setLoading] = useState(true)

    //reroute to results after completed
    const history = useHistory();
    const routeToResults = () => {
        ReactPixel.trackCustom('CompleteTest'); //register custom pixel event
        history.push('/wyniki');
    }

    //on first load prepares react components for all questions
    useEffect(() => {
        setLoading(true);
        //reset results in redux store
        dispatch(clearResults());
        let qComps = [];
        qComps.push(<PersonalInfoQuestion key={0} qId={0}/>);
        questions.forEach((question, index) => {
            let qComp =
                <SurveyQuestion
                    key={index + 1}
                    qId={index + 1}
                    qText={question.text}
                    answers={question.answers}
                />;
            qComps.push(qComp)
        })
        setQComponents(qComps);
        setLoading(false);
    }, [])


    return (
        <Layout>
            {/*Metatags for SEO*/}
            <Helmet>
                <meta
                    name="description"
                    content="Wypełnij test online, który pokaże w jakiej kondycji są twoje nerki."
                />
                <title>Quiz - ogólnopolski test zdrowia nerek</title>
            </Helmet>

            <ScrollProgressBar/>
            <ScrollToSectionComponent className='SurveyContainer'>

                <Form inline onSubmit={routeToResults}>
                    {!loading && qComponents}
                    {!loading && <BloodParametersQuestion qId={qComponents.length}/>}


                    <button type='submit'> Zobacz wyniki</button>
                    <Form.Check
                        className="Survey-checkbox"
                        required
                        type='checkbox'
                        label={
                            <span>
                                Wyrażam zgodę na przekazanie organizatorowi kampanii społecznej OGÓLNOPOLSKI TEST ZDROWIA NEREK
                                wyników moich badań przesiewowych w celu zakwalifikowania na bezpłatne
                                badania laboratoryjne. W szczególności wyników kreatyniny, glukozy, cholesterolu
                                całkowitego, a także skurczowego i rozkurczowego ciśnienia krwi stanowiących
                                pytanie 9. na stronie kwestionariusza kampanii społecznej OGÓLNOPOLSKI TEST ZDROWIA NEREK.
                            </span>
                        }
                    />
                </Form>

            </ScrollToSectionComponent>
        </Layout>

    );

}

export default connect()(SurveyPage);