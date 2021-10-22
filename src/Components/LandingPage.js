import {Link, useHistory} from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./LandingPage.css"
import ShareTest from "./ShareTest/ShareTest";
import Partners from "./Partners/Partners"
import LogoPartner from "./Partners/LogoPartner"
import ISBZdrowie from '../Assets/partners/Ogólnopolskie/ISB-zdrowie.png';
import zdrowneNet from '../Assets/partners/Ogólnopolskie/zdrowe-net.PNG';
import KMN from '../Assets/partners/Ogólnopolskie/KMN.png';
import osod from '../Assets/partners/Ogólnopolskie/osod.png';
import {useEffect} from "react";
import PersonPartner from "./Partners/PersonPartner";
import Layout from "./Common/Layout";
import ReactPixel from 'react-facebook-pixel';


function LandingPage({props}) {
    const general_partners= [
        <PersonPartner
            name="prof. dr hab.n.med. Ryszard Gellert"
            desc="Krajowy Konsultant w dziedzinie Nefrologii"
        />,
        <LogoPartner
            logo={KMN}
            link="https://ptnefro.pl/klub-mlodych-nefrologow"
        />,
        <LogoPartner
            logo={osod}
            link="https://osod.info/"
        />
    ];

    const media_parnters = [
        <LogoPartner
            logo={ISBZdrowie}
            link="https://www.isbzdrowie.pl/"
        />
       ,
        <LogoPartner
            logo={zdrowneNet}
            link="http://zdrowe.net/"
        />
    ]

    //routing after starting the test
    const history = useHistory();
    const startTest = () =>{
        ReactPixel.trackCustom('StartTest'); //register custom pixel event
        history.push('/test');
    }

    //scroll to top but only if no arguments are present
    useEffect(() => {
        const queryString = window.location.search;
        if(queryString){return;}
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, );

    return (
        <Layout>
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
                                    <Link to={'/polityka-prywatnosci'}>polityką
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
                general={general_partners}
            />

        </Layout>

    );

}

export default LandingPage;