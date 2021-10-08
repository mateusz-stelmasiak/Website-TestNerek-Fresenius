import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./ShareTest.css"
import {useState} from "react";
import {emailRegex, fetchOptions, inviteScriptPath} from "../../Utils";
import {
    WhatsappIcon,
    FacebookIcon,
    FacebookShareButton, FacebookMessengerShareButton, FacebookMessengerIcon, WhatsappShareButton,
} from "react-share";


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
    const shareUrl="https://www.poradnianefrologiczna.pl/";
    const shareIconSize=38;

    return (
        <div className="ShareTest" >
            <h2>Jeśli chcesz polecić test, podziel się nim</h2>

            <div className="ShareSocial">
                <FacebookShareButton
                    url={shareUrl}
                >
                    <FacebookIcon size={shareIconSize} round={true} />
                </FacebookShareButton>

                <FacebookMessengerShareButton
                    url={shareUrl}
                    appId={process.env.FACEBOOK_APP_ID} >
                    <FacebookMessengerIcon  size={shareIconSize}  round={true} />
                </FacebookMessengerShareButton>

                <WhatsappShareButton  url={shareUrl}>
                    <WhatsappIcon  size={shareIconSize} round={true}/>
                </WhatsappShareButton>
            </div>

            <h3>lub wyślij komuś zaproszenie email</h3>
            <form className="ShareEmail" onSubmit={sendInvite}>
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


        </div>



    );

}

export default ShareTest