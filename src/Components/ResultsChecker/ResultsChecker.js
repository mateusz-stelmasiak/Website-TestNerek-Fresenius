import "./ResultsChecker.css"
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"
import BloodResultsQuestion from "./BloodResultsQuestion"
import QuestionTitle from "../Survey/QuestionTitle";

export default function ResultsChecker(){


    return (
        <ScrollToSectionComponent className="InfoPage">
            <h1>Sprawdz swoje wyniki</h1>
            <p>Po otrzymaniu wyników z laboratorium użyj poniższego narzędzia aby otrzymać ich interpretację.</p>

            <BloodResultsQuestion id="b2" qId={0}/>

            <QuestionTitle qId={1}> Proszę podać wyniki <u>parametrów moczu</u> otrzymane z laboratorium</QuestionTitle>

        </ScrollToSectionComponent>
    );
}