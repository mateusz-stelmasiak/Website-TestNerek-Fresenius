import "./AdminLogin.css"
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'
import {codeGenScriptPath, emailRegex, fetchOptions} from "../../Utils";
import {setUserLabCode} from "../../Redux/Actions/surveyActions";

//test


export default function AdminLogin() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [feedback,setFeedback] = useState("");
    let userIcon =  <FontAwesomeIcon icon={faUser} />;
    let passIcon =<FontAwesomeIcon icon={faLock} />;

    // let logIn = async (event) => {
    //     event.preventDefault();
    //
    //     setFeedback("Próba logowania...")
    //     const response = await fetch("/PhpScripts/authenticate.php?username=" + username + "&password=" + password, fetchOptions);
    //     const respBody = await response.text();
    //     let respObj = JSON.parse(respBody);
    //     if (respObj.success !== "true") {
    //         setFeedback(respObj.feedback);
    //         return
    //     }
    //     setFeedback("");
    // }

    return (
        <section className="AdminLogin">
            <div className="login">
                <h1>Login</h1>
                <Form action="/PhpScripts/authenticate.php" method="post">
                    <div className="inputContainer">
                        <Form.Group >
                            <Form.Label>{userIcon}</Form.Label>

                            <Form.Control
                                required
                                name="username"
                                type="text"
                                placeholder="Nazwa użytkownika"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>{passIcon}</Form.Label>
                            <Form.Control
                                required
                                name="password"
                                type="password"
                                placeholder="Hasło"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        {feedback !=="" && feedback}
                        <button type='submit'>Zaloguj</button>
                    </div>


                </Form>

            </div>

        </section>
    );
}