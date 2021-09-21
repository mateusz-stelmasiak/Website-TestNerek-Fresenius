import "./AdminLogin.css"
import {Form} from "react-bootstrap";
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faLock } from '@fortawesome/free-solid-svg-icons'

//test


export default function AdminLogin() {
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let userIcon =  <FontAwesomeIcon icon={faUser} />;
    let passIcon =<FontAwesomeIcon icon={faLock} />;

    let logIn = () => {

    }

    return (
        <section className="AdminLogin">
            <div className="login">
                <h1>Login</h1>
                <Form onSubmit={logIn}>
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
                        <button type='submit'>Zaloguj</button>
                    </div>


                </Form>

            </div>

        </section>
    );
}