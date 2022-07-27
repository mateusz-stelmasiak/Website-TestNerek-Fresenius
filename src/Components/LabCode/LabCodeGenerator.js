import Reel from "react-reel";
import React, {useEffect, useRef, useState} from "react";
import {connect} from "react-redux";
import {isUserEligibleForLab, powiatInfo} from "../../JSBackend";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {codeGenScriptPath, emailRegex, fetchOptions} from "../../Utils";
import "./LabCodeGenerator.css"
import {setUserLabCode} from "../../Redux/Actions/surveyActions";
import ReactPixel from 'react-facebook-pixel';
import Dots from "../Common/Dots";

function LabCodeGenerator({zip, code, dispatch, surveyResult}) {
    const [eligable, setEligable] = useState(undefined);
    const [powiatId, setPowiatId] = useState(-1);
    const [name, setName] = useState("")
    const [labCode, setLabCode] = useState(code)
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [feedback, setFeedback] = useState("")
    const codeFieldRef = useRef(null);

    async function determinUserEligable() {
        if (surveyResult.severity === 'low') return;

        //determines if users zip is eligable for a code
        let resp = await isUserEligibleForLab(zip);
        if (resp.success === "false"){
            setEligable(false);
            return;
        }
        if (resp.success === "error"){
            setEligable(false);
            return;
        }

        setEligable(true);
        setPowiatId(resp.powiat);
        ReactPixel.trackCustom('EligibleForCode');
        if (resp.powiat === 3)  ReactPixel.trackCustom('EligibleFromMlawa');
        if (resp.powiat === 4)  ReactPixel.trackCustom('EligibleFromZuromin');
        if (resp.powiat === 5)  ReactPixel.trackCustom('EligibleFromNidzica');
    }

    useEffect(() => {
        determinUserEligable();
    }, [])

    function inputEmail(mail) {
        if (mail.length > 256) return;
        setFeedback("");
        setEmail(mail);
    }

    function inputName(p) {
        setFeedback("");
        setName(p);
    }

    function inputPhone(p) {
        if (p.length > 20) return;
        setFeedback("");
        setPhone(p);
    }


    async function generateCode(event) {
        event.preventDefault();
        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Niepoprawny adres email!");
            return
        }

        //valide Phone
        if (phone !== "" && !phone.match(/([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+/)) {
            setFeedback("Niepoprawny numer telefonu!");
            return
        }

        setFeedback("Generowanie kodu..")
        const response = await fetch(codeGenScriptPath + "?email=" + email + "&name=" + name + "&zip=" + zip + "&phone=" + phone, fetchOptions);
        const respBody = await response.text();
        console.log(respBody);
        let respObj = JSON.parse(respBody);
        if (respObj.success !== "true") {
            setFeedback(respObj.feedback);
            return
        }
        await setFeedback("");
        // let respObj= {code:1327};
        await dispatch(setUserLabCode(respObj.code));
        await setLabCode(respObj.code);
        ReactPixel.trackCustom('ReceiveCode'); //register custom pixel event

        if (codeFieldRef.current) {
            codeFieldRef.current.scrollIntoView();
        }
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
            {eligable === undefined &&
                <div className="loadingContainer">
                    <h3>Trwa sprawdzanie czy kwalifikuje się Pani/Pan na darmowe badanie nerek w swoim powiecie</h3>
                    <span>oczekiwanie na odpowiedź serwera<Dots/></span>
                </div>
            }

            {eligable === "error" &&
            <div className="loadingContainer">
                <h3>Przepraszamy, wystąpił błąd serwera</h3>
                <span>prosimy spróbować odświeżyć stronę</span>
            </div>
            }

            {eligable === false &&
            <div className="loadingContainer">
                <h3>Niestety, nie kwalifikuje się Pani/Pan na darmowe badanie nerek</h3>
                <span>nasza akcja nie odbywa się w pańskim powiecie</span>
            </div>
            }

            {eligable === true &&
            <Form className="inline" onSubmit={generateCode}>
                <h2>Kwalifikuje się Pani/Pan na darmowe badanie nerek w swoim powiecie</h2>


                {powiatInfo[powiatId]}


                <p>
                    Prosimy by zabrać ze sobą prawidłowo pobrany mocz. Na badaniach nie trzeba być na czczo.
                </p>

                <p>
                    Po wpisaniu imienia i nazwiska otrzyma Pani/Pan kod, który należy podać w laboratorium.
                    Może Pani/Pan także podać swój adres email lub numer telefonu, wyślemy kod, aby się nie
                    zagubił.
                </p>


                {labCode === undefined &&
                <Form.Group>
                    <Form.Control
                        required
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => inputName(e.target.value)}
                        placeholder="wpisz imię i nazwisko"
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
                        onChange={(e) => inputPhone(e.target.value)}
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
                                    adresu e-mail oraz imienia i nazwiska w celu wystawienia skierowania na bezpłatne badania laboratoryjne.
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


                {labCode !== undefined &&
                <div className="codeContainer" ref={codeFieldRef}>
                    <h3>Twój kod do badań w laboratiorium:</h3>
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
            zip: state.survey.userData.zip,
            code: state.survey.labCode,
            surveyResult: state.survey.surveyResult,
        };
    }
;

export default connect(mapStateToProps)(LabCodeGenerator);