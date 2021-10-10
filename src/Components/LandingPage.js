import {Link, useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LandingPage.css"
import ShareTest from "./ShareTest/ShareTest";
import Partners from "./Partners/Partners"
import LogoPartner from "./Partners/LogoPartner"
import ISBZdrowie from '../Assets/partners/Ogólnopolskie/ISB-zdrowie.png';
import zdrowneNet from '../Assets/partners/Ogólnopolskie/zdrowe-net.PNG';
import {useEffect} from "react";


function LandingPage({props}) {
    // const general_partners= [
    // ]

    const media_parnters = [
        <LogoPartner
            logo={ISBZdrowie}
            link="https://www.isbzdrowie.pl/"
        >
        </LogoPartner>,
        <LogoPartner
            logo={zdrowneNet}
            link="http://zdrowe.net/"
        >
        </LogoPartner>
    ]

    //routing after starting the test
    const history = useHistory();
    const startTest = () => history.push(process.env.REACT_APP_TOKEN + '/test');

    //scroll to top but only if no arguments are present
    useEffect(() => {
        const queryString = window.location.search;
        if(queryString){return;}
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, );

    return (
        <div>
            <section className="LandingPage">
                <Form className="startTest" onSubmit={startTest}>
                    <Button type='submit'> Start testu </Button>

                    <div className="checkBoxes">
                        <Form.Check
                            required
                            type='checkbox'
                            label={
                                <div>
                                    Oświadczam, że zapoznałam/zapoznałem się z&nbsp;
                                    <Link to={process.env.REACT_APP_TOKEN + '/polityka-prywatnosci'}>polityką
                                        prywatności</Link>
                                    &nbsp;i akceptuję jej warunki.
                                </div>
                            }
                        />
                        <Form.Check
                            required
                            type='checkbox'
                            label={
                                <div>
                                    Wyrażam zgodę na udostępnienie moich danych osobowych organizatorowi kampanii
                                    <br/> społecznej OGÓLNOPOLSKI TEST ZDROWIA NEREK, w zakresie niezbędnym do jej
                                    przeprowadzenia.
                                </div>
                            }
                        />
                    </div>


                </Form>
                <ShareTest/>
            </section>

            <Partners
                media={media_parnters}
            />

        </div>

    );

}

export default LandingPage;