import "./AdminLogin.css"
import {Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'

export default function AdminLogin() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let [feedback,setFeedback] = useState("");
    let userIcon =  <FontAwesomeIcon icon={faUser} />;
    let passIcon =<FontAwesomeIcon icon={faLock} />;

    //if login failed error will be passed as html parameter
    useEffect(() => {
        const queryString = window.location.search;
        if(!queryString) return;

        setFeedback('Niepoprawne hasło/nazwa użytkownika.');
    },[] );

    return (
        <section className="AdminLogin">
            <div className="login">
                <h1>Login</h1>
                <Form action="../PhpScripts/authenticate.php" method="post">
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
                        {feedback !=="" &&
                            <div className="feedback">{feedback}</div>
                        }

                        <button type='submit'>Zaloguj</button>
                    </div>


                </Form>

            </div>

        </section>
    );
}