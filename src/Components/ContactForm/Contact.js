import "./Contact.css"
import React, {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {sendContactMsgPath, emailRegex, fetchOptions} from "../../Utils";
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"
import ReCAPTCHA from "react-google-recaptcha";
import Dots from "../Common/Dots";
import Layout from "../Common/Layout";
import {connect} from "react-redux";

function Contact({highContrast}) {
    const [feedback, setFeedback] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [captchaValue, setCaptchaValue] = useState(null);
    const [captchaMode,setCaptchaMode]=useState(highContrast? 'dark':'light');



    function captchaChange(value) {
        setCaptchaValue(value);
    }

    function inputEmail(mail) {
        if (mail.length > 256) return;
        setFeedback("");
        setEmail(mail);
    }

    function inputName(name) {
        if (name.length > 50) return;
        setFeedback("");
        setName(name);
    }

    function inputMsg(msg) {
        if (msg.length > 500) {
            setFeedback("Wiadomość zbyt długa!");
            return;
        }
        setFeedback("");
        setMsg(msg);
    }

    function emptyAllFields() {
        setName("");
        setMsg("");
        setEmail("");
    }


    async function sendMsg(event) {
        event.preventDefault();

        //validate captcha filled
        if (captchaValue === null) {
            setFeedback("Zaznacz, że nie jesteś robotem!");
            return
        }

        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Niepoprawny adres email!");
            return
        }
        //valide name and surname
        if (name === "") {
            setFeedback("Brak imienia i nazwiska!");
            return
        }
        if (msg === "") {
            setFeedback("Brak treści!");
            return
        }
        //replace all newlines with <br/> to keep format
        let msg_formatted = msg.replace(/(?:\r\n|\r|\n)/g, '<br/>');

        setFeedback(<span>wysłanie wiadomości<Dots/></span>)
        const response = await fetch(sendContactMsgPath + "?email=" + email + "&name=" + name + "&msg=" + msg_formatted + "&captcha=" + captchaValue, fetchOptions);
        const respBody = await response.text();
        console.log(respBody);
        let respObj = JSON.parse(respBody);
        //if fails
        if (respObj.success !== "true") {
            setFeedback(respObj.feedback);
            return
        }
        setFeedback(respObj.feedback);
        emptyAllFields();
    }


    useEffect(()=>{
        let newMode=highContrast ? 'dark':'light';
        setCaptchaMode(newMode);
    },[highContrast])

    return (
        <Layout>
            <ScrollToSectionComponent className="InfoPage Contact">
                <h1>Kontakt</h1>
                <p>
                    Skontaktuj się telefonicznie lub mailowo wypełniając poniższy formularz.
                    <br/><br/>Tel. <a href="tel:+48512556512">+48 512 556 512</a>

                </p>


                <Form onSubmit={sendMsg}>
                    <Form.Group>
                        <Form.Label>Imię i nazwisko</Form.Label>
                        <Form.Control
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => inputName(e.target.value)}
                            placeholder="Twoje imię i nazwisko"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Adres email</Form.Label>
                        <Form.Control
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => inputEmail(e.target.value)}
                            placeholder="Twój adres email"
                            required
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Wiadomość</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={6}
                            id="msg"
                            value={msg}
                            onChange={(e) => inputMsg(e.target.value)}
                            placeholder="Twoja wiadomość"
                            required
                        />
                    </Form.Group>


                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_CAPTCHA_KEY}
                        onChange={captchaChange}
                        size="normal"
                        mode={captchaMode}
                    />

                    {feedback !== "" &&
                    <div className="feedback">
                        {feedback}
                    </div>}


                    <Button type='submit'>
                        Wyślij
                    </Button>

                </Form>

                <p>
                    <strong>Fresenius Nephrocare Polska Sp. z o.o.</strong>
                    <br/> ul. Krzywa 13
                    <br/> 60-118 Poznań
                    <br/> Tel. <a href="tel:+48618392600">+48 61 8392 600</a>
                    <br/> Faks. +48 61 8392 601
                    <br/> E-mail: <a href="mailto:sekretariat.pl@fmc-ag.com">sekretariat.pl(at)fmc-ag.com</a>
                </p>

                <p>
                    Sąd Rejonowy w Poznaniu - Nowe Miasto i Wilda<br/>
                    w Poznaniu VIII Wydział KRS;<br/>
                    KRS: 0000054766<br/>
                    NIP: 783-15-59-498<br/>
                    kapitał zakładowy: 135.852.000
                </p>

            </ScrollToSectionComponent>
        </Layout>
    );
}

const mapStateToProps = (state) => {
    return {
        highContrast: state.theme.highContrast,
    };
};

export default connect(mapStateToProps)(Contact);