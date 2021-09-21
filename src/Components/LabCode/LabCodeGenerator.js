import Reel from "react-reel";
import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {isUserEligableForLab} from "../../JSBackend";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {codeGenScriptPath, emailRegex, fetchOptions} from "../../Utils";
import "./LabCodeGenerator.css"
import {setUserLabCode} from "../../Redux/Actions/userActions";

function LabCodeGenerator({zip, code, dispatch}) {
    const [eligable, setEligable] = useState(false)
    const [PESEL, setPESEL] = useState("")
    const [labCode, setLabCode] = useState(code)
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [feedback, setFeedback] = useState("")

    async function determinUserEligable(){
        console.log(zip);
        let resp=await isUserEligableForLab(zip);
        console.log(resp);
        setEligable(resp);
    }

    useEffect(() => {
        determinUserEligable();
    }, [zip])

    function inputEmail(mail) {
        if (mail.length > 256) return;
        setFeedback("");
        setEmail(mail);
    }

    function inputPESEL(p) {
        if (p.length > 11) return;
        setFeedback("");
        setPESEL(p);
    }


    async function generateCode(event) {
        event.preventDefault();
        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Niepoprawny adres email!");
            return
        }
        //valide PESEL
        if (!PESEL.match(/[0-9]{11}/)) {
            setFeedback("Niepoprawny numer PESEL!");
            return
        }

        setFeedback("Generowanie kodu..")
        const response = await fetch(codeGenScriptPath + "?email=" + email + "&PESEL=" + PESEL + "&zip=" + zip, fetchOptions);
        const respBody = await response.text();
        let respObj = JSON.parse(respBody);
        if (respObj.success !== "true") {
            setFeedback(respObj.feedback);
            return
        }
        setFeedback("");
        setLabCode(respObj.code);
        dispatch(setUserLabCode(respObj.code));
    }


    //used for reel
    const theme = {
        reel: {
            height: "1em",
            display: "flex",
            alignItems: "flex-end",
            overflowY: "hidden",
            lineHeight: "0.95em"
        },
        group: {
            transitionDelay: "0ms",
            transitionTimingFunction: "ease-in-out",
            transform: "translate(0, 0)",
            height: "1em"
        },
        number: {
            height: "1em"
        }
    };

    return (
        <div className="LabCodeGenerator ">
            {eligable &&
            <Form className="inline" onSubmit={generateCode}>
                <h2>Kwalifikuje się Pani/Pan na darmowe badanie nerek w swoim powiecie</h2>
                <p>Badania można wykonać od 15 sierpnia do 15 października 2021,
                    w laboratorium DIAGNOSTYKA w Mińsku Mazowieckim przy ulicy Laboratoryjnej 30,
                    w godzinach od 7.00 do 10.00, codziennie oprócz sobót i niedziel.
                    Po wpisaniu numeru PESEL otrzyma Pani/Pan czterocyfrowy kod, który należy podać w laboratorium.
                    Może Pani/Pan także podać swój adres email lub numer telefonu, wyślemy na niego kod aby się nie
                    zagubił!
                </p>

                {labCode === undefined &&
                <Form.Group>
                    <Form.Control
                        required
                        id="PESEL"
                        type="number"
                        value={PESEL}
                        onChange={(e) => inputPESEL(e.target.value)}
                        placeholder="wpisz numer PESEL"
                    />
                    <Form.Control
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => inputEmail(e.target.value)}
                        placeholder="wpisz adres email (opcjonalne)"
                    />
                    <Form.Control
                        id="tel"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="wpisz numer telefonu (opcjonalne)"
                    />
                    {feedback !== "" &&
                    <div className="feedback">
                        {feedback}
                    </div>}
                    <br/>
                    <Form.Group className="checkBoxes">
                        <Form.Check
                            required
                            type='checkbox'
                            label={
                                <span>
                                    Wyrażam zgodę na przekazanie organizatorowi kampanii społecznej OGÓLNOPOLSKI TEST ZDROWIA NEREK mojego
                                    adresu e-mail i numeru PESEL w celu wystawienia skierowania na bezpłatne badania laboratoryjne.
                                </span>
                            }
                        />
                        <Form.Check
                            required
                            type='checkbox'
                            label={
                                <span>
                                    Wyrażam zgodę na przekazanie Fresenius NephroCare Polska sp. z o. o. wyników
                                    badań laboratoryjnych zleconych w wyniku udziału w kampanii społecznej OGÓLNOPOLSKI TEST ZDROWIA NEREK.

                                </span>
                            }
                        />
                        <Form.Check
                            required
                            type='checkbox'
                            label={
                                <span>
                                    Wyrażam zgodę na kontakt ze strony lokalnych stacji dializ Fresenius NephroCare Polska sp. z o. o.
                                    w celu umówienia konsultacji nefrologicznej.
                                </span>
                            }
                        />
                    </Form.Group>
                </Form.Group>}



                {labCode !== undefined && <div className="codeContainer">
                    <h3>Twój 4 cyfrowy kod do badań w laboratiorium:</h3>
                    <div className="code"><Reel theme={theme} text={labCode.toString()}/></div>
                </div>}

                {labCode === undefined &&
                <Button type='submit'>
                    Odbierz kod
                </Button>}
            </Form>
            }
        </div>
    );
}

const mapStateToProps = (state) => {
        return {
            zip: state.user.userData.zip,
            code: state.user.labCode,
            surveyResult: state.survey.surveyResult,
        };
    }
;

export default connect(mapStateToProps)(LabCodeGenerator);