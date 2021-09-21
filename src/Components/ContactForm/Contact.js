import "./Contact.css"
import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {sendContactMsgPath, emailRegex, fetchOptions} from "../../Utils";
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"

export default function Contact() {
    const [feedback, setFeedback] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");


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

    function emptyAllFields(){
        setName("");
        setMsg("");
        setEmail("");
    }


    async function sendMsg(event) {
        event.preventDefault();
        //validate email
        if (email !== "" && !email.match(emailRegex)) {
            setFeedback("Niepoprawny adres email!");
            return
        }
        //valide name and surname
        if (name === ""){
            setFeedback("Brak imienia i nazwiska!");
            return
        }
        if (msg === ""){
            setFeedback("Brak treści!");
            return
        }
        //replace all newlines with <br/> to keep format
        let msg_formatted = msg.replace(/(?:\r\n|\r|\n)/g, '<br/>');

        setFeedback("Wysyłanie wiadomości..")
        const response = await fetch(sendContactMsgPath + "?email=" + email + "&name=" + name + "&msg=" + msg_formatted, fetchOptions);
        const respBody = await response.text();
        let respObj = JSON.parse(respBody);
        //if fails
        if (respObj.success !== "true") {
            setFeedback(respObj.feedback);
            return
        }
        setFeedback(respObj.feedback);
        emptyAllFields();
    }

    return (
        <ScrollToSectionComponent className="InfoPage Contact">
            <h1>Kontakt</h1>
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
                    {feedback !== "" &&
                    <div className="feedback">
                        {feedback}
                    </div>}
                </Form.Group>


                <Button type='submit'>
                    Wyślij
                </Button>

            </Form>

            <p><strong>Fresenius Nephrocare Polska Sp. z o.o.</strong><br/> ul. Krzywa 13<br/> 60-118 Poznań<br/> Tel.
                +48
                61 8392 600<br/> Faks. +48 61 8392 601<br/> E-mail: sekretariat.pl(at)fmc-ag.com</p>

            <p>Sąd Rejonowy w Poznaniu - Nowe Miasto i Wilda<br/> w Poznaniu VIII Wydział KRS;<br/> KRS:
                0000054766<br/> NIP: 783-15-59-498<br/> kapitał zakładowy: 135.852.000 PLN</p>
        </ScrollToSectionComponent>
    );
}