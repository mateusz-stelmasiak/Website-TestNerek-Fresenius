import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ShareTest.css"
import {useState} from "react";
import {emailRegex, fetchOptions, inviteScriptPath} from "../../Utils";


function ShareTest(){
    const [email,setEmail]=useState("")
    const [feedback,setFeedback]=useState("")

    function inputEmail(mail){
        setFeedback("");
        setEmail(mail);
    }

    async function sendInvite(event){
        event.preventDefault();
        if (!email.match(emailRegex)){
            setFeedback("Niepoprawny adres email!");
            return
        }
        setFeedback("Wysłanie zaproszenia...")
        const response = await fetch(inviteScriptPath+"?email="+email,fetchOptions);
        const respBody= await response.text();
        const respObj = JSON.parse(respBody);
        //const respObj = JSON.parse('{"feedback": "Wysłano zaproszenie do mateusz.stelmasiak@alhambrasklep.pl!"}')
        // console.log(respObj);
        setFeedback(respObj.feedback)
    }

    return (
        <form className="ShareTest" onSubmit={sendInvite}>
            <h2>Jeśli chcesz komuś polecić test, wyślij mu zaproszenie!</h2>
            <Form.Control
                id="email"
                type="email"
                onChange={(e)=>inputEmail(e.target.value)}
                placeholder="przykład@gmail.com"
            />
            {feedback!=="" && feedback}
            <Button type='submit'>
                Wyślij!
            </Button>

        </form>
    );

}

export default ShareTest