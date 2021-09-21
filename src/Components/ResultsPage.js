import "./ResultsPage.css"
import {useEffect, useState} from "react";
import {connect} from "react-redux";
import {calculateResult} from "../Redux/Actions/surveyActions";
import ShareTest from "./ShareTest/ShareTest";
import LabCodeGenerator from "./LabCode/LabCodeGenerator";
import KidneysWidget from "./ResultsPage/KidneysWidget"
import ScrollToSectionComponent from "./Common/ScrollToSectionComponent"

function ResultsPage({surveyResult,age,dispatch,}){
    const [loading,setLoading]=useState(true)

    async function loadResults(){
        setLoading(true);
        await dispatch(calculateResult(age))
        setLoading(false);
    }

    useEffect(()=>{
        loadResults()
    },[])


    return (
        <ScrollToSectionComponent className="InfoPage">

            {surveyResult!==undefined && <div className="ResultsPage">
                <div className="resultContainer">
                    <h1>Wynik testu wskazuje, że Pani/Pana {surveyResult.header}</h1>
                    <KidneysWidget color={surveyResult.color}/>
                    <h4 style={{color:surveyResult.color}}>{surveyResult.result}</h4>

                    <h3 >{surveyResult.verbose}</h3>

                    <LabCodeGenerator/>
                    <ShareTest/>
                </div>
            </div>
            }

        </ScrollToSectionComponent>
    );

}

const mapStateToProps = (state) => {
    return {
        age: state.user.userData.age,
        surveyResult: state.survey.surveyResult,
    };
};

export default connect(mapStateToProps)(ResultsPage);