import Partners from "../Partners/Partners"
import LogoPartner from "../Partners/LogoPartner"
import burmistrz from '../../Assets/partners/Minsk/burmistrz.png';
import powiat from '../../Assets/partners/Minsk/powiat.jpg';
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent";
import stacjaDializ from "../../Assets/minsk_stacja.jpg";
import budynek from "../../Assets/minsk_budynek.jpg";
import Layout from "../Common/Layout";

export default function Minsk() {
    const general_partners= [
        <LogoPartner
            logo= {burmistrz}
            link="https://www.minsk-maz.pl/"
            name="Marcin Jakubowski"
            desc="Burmistrz miasta Mińsk Mazowiecki"
        >
        </LogoPartner>,
        <LogoPartner
            logo= {powiat}
            link="http://powiatminski.pl/"
            name="Antoni Jan Tarczyński"
            desc="Starosta Miński"
        >
        </LogoPartner>
    ]

    // const media_parnters = [
    //
    // ]


    return (
        <Layout>
            <ScrollToSectionComponent className="InfoPage">
                <h1>Mińsk Mazowiecki</h1>
                <p>
                    <b>
                        W powiecie mińskim (województwo mazowieckie) rusza wirtualna poradnia nefrologiczna.
                    </b>
                </p>
                <p>
                    Na stronie głównej - <a href="/">www.poradnianefrologiczna.pl</a> można wypełnić prosty test, który
                    pokaże w jakiej kondycji są nasze nerki. Jeśli pacjent będzie tego potrzebował, po
                    uzupełnieniu quizu, dostanie skierowanie na bezpłatne badania nerek w miejscowym
                    laboratorium.
                </p>
                <p>
                    W ramach badań profilaktycznych, mieszkańcy będą mogli wykonywać dwa badania - ogólne
                    badanie moczu i oznaczenie we krwi poziomu kreatyniny wraz z obliczeniem e-GFR. Te dwa
                    badania pokażą, czy coś złego dzieje się w ich nerkach.
                </p>
                <div className="img-container">
                    <img src={stacjaDializ} alt="stacjaDializ"/>
                    <img src={budynek} alt="budynek"/>
                </div>

                <p>
                    Akcja społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK będzie w Mińsku
                    Mazowieckim trwać od sierpnia do października 2021.
                </p>
            </ScrollToSectionComponent>

            <Partners
                general={general_partners}
            />
        </Layout>


    );
}