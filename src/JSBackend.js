import {BloodParameter, ChoiceQuestion} from "./Utils";

export let bloodParameters =[
    new BloodParameter("Kreatynina",["umol/l","mg/dl"],[130,1.5]),
    new BloodParameter("Glukoza",["mmol/l","mg/dl"],[5.6,100]),
    new BloodParameter("Cholesterol całkowity",["mmol/l","mg/dl"],[5.2,200]),
    new BloodParameter("Skurczowe ciśnienie krwi",[],[]),
    new BloodParameter("Rozkurczowe ciśnienie krwi",[],[])
]


export let bloodResults =[
    new BloodParameter("Kreatynina",["umol/l","mg/dl"],[130,1.5]),
    new BloodParameter("Glukoza",["mmol/l","mg/dl"],[5.6,100]),
    new BloodParameter("Cholesterol całkowity",["mmol/l","mg/dl"],[5.2,200])
]

let standardAnswers=["Tak","Nie","Nie wiem"];
export let choiceQuestions = [
    new ChoiceQuestion("Czy przeszła Pani/Pan zakażenie koronawirusem?",standardAnswers),
    new ChoiceQuestion("Czy choruje Pani/Pan na nerki?",standardAnswers),
    new ChoiceQuestion("Czy ktokolwiek z Pani/Pana krewnych (rodzice, rodzeństwo, dzieci) choruje/chorował na nerki?",standardAnswers),
    new ChoiceQuestion("Czy choruje Pani/Pan na którąkolwiek z następujących chorób: nadciśnienie, cukrzycę lub " +
        "stan przedcukrzycowy, choroby serca lub czy przebyła Pani/Pan udar mózgu?",standardAnswers),
    new ChoiceQuestion("Czy pali Pani/Pan papierosy?",['Tak','Tak, okazjonalnie','Rzuciłam/em','Nie']),
    new ChoiceQuestion("Czy zażywa Pani/Pan leki przeciwbólowe?",['Tak, kilka razy w tygodniu','Tak, okazjonalnie','Nie']),
    new ChoiceQuestion("Czy występują u Pani/Pana jakiekolwiek z następujących objawów: obrzęki, bóle pleców i/lub " +
        "krzyża, pienisty mocz, bóle podbrzusza i/lub kłopoty z oddawaniem moczu, uporczywe skurcze łydek?"
        ,standardAnswers),
]

let LOW_RESULT_BOUNDARY = 0;
let MODERATE_RESULT_BOUNDARY = 3;
let HIGH_RESULT_BOUNDARY = 5;

let possibleResultHeaders={
    low:'nerki są',
    moderate: 'nerkom potrzebna jest ',
    high:'nerki wymagają '
}

let possibleResultTitles={
    low:'w dobrej kondycji',
    moderate: 'regularna kontrola',
    high:'szybkiej kontroli'
}

let verboseResults={
    low:'Mimo tego, raz w roku warto wykonać badanie poziomu kreatyniny we krwi i ogólne badanie moczu. ' +
        'O skierowanie na oba te testy można poprosić swojego lekarza POZ.  ' +
        'Można też pójść bezpośrednio do wybranego laboratorium. ' +
        'Badanie wykonane odpłatnie kosztuje ok. 20 zł, da ono pewność, że nerki działają dobrze.\n',
    moderate: 'Zalecamy kontrolę kondycji Pani/Pana nerek. Raz w roku trzeba wykonać badanie poziomu kreatyniny' +
        ' we krwi i ogólne badanie moczu. O skierowanie na oba te testy można poprosić swojego lekarza POZ.  ' +
        'Można też pójść bezpośrednio do wybranego laboratorium - badanie wykonane odpłatnie kosztuje ok. 20 zł,' +
        ' da ono pewność, że nerki działają dobrze.\n',
    high:'Zalecamy szybką kontrolę kondycji Pani/Pana nerek. W tym celu należy wykonać badanie poziomu kreatyniny we krwi i ogólne badanie moczu. ' +
        'O skierowanie na oba te testy można poprosić swojego lekarza POZ.  Można też pójść bezpośrednio do wybranego laboratorium - ' +
        'badanie wykonane odpłatnie kosztuje ok. 20 zł, da ono pewność, że nerki działają dobrze.\n'
}

let resultColors={
    low:"#1CCB00",
    moderate:"#FEA700",
    high:"var(--secondary-color)"
}

let possibleResults ={
    low: {header:possibleResultHeaders.low,result:possibleResultTitles.low,verbose:verboseResults.low,color:resultColors.low},
    moderate: {header:possibleResultHeaders.moderate,result:possibleResultTitles.moderate,verbose:verboseResults.moderate,color:resultColors.moderate},
    high:{header:possibleResultHeaders.high,result:possibleResultTitles.high,verbose:verboseResults.high,color:resultColors.high}
}


export function calculateSurveyResult(answers){
    if (!answers) return {result:'-',verbose:'nie podano niezbędnych informacji.'}
    let result;


    let negativeAns=0;
    answers.forEach((answer)=>{
        if(answer===0) negativeAns+=1;
    });

    //BMI impact on the answer
    // let BMI = calculateBMI(weight,height);
    // if (BMI>=30.0) negativeAns+1;

    //Bloodwork impact on the anwser


    if (negativeAns>=HIGH_RESULT_BOUNDARY) result=possibleResults.high
    else if (negativeAns>=MODERATE_RESULT_BOUNDARY) result=possibleResults.moderate
    else if (negativeAns>=LOW_RESULT_BOUNDARY) result=possibleResults.low

    return result;
}

export function isUserEligableForLab(zip){
    //some logic

    return true;
}

//returns appropriate form of 'lat' based on given number
export function latOrLata(age){
    age= parseInt(age);
    //exceptions
    if (age===1) return 'rok'
    if (age>5 && age<22) return 'lat'
    if (age>105 && age<122) return 'lat'

    //general rule
    let lastDigit= age%10;
    if (lastDigit<=1) return 'lat'
    return lastDigit<5? 'lata':'lat';
}

export function calculateBMI(weight,height){
    if (weight && height){
        return weight/height/height * 10.0;
    }
    return -1;
}