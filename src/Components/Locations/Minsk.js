import Partners from "../Partners/Partners"
import LogoPartner from "../Partners/LogoPartner"
import burmistrz from '../../Assets/partners/Minsk/burmistrz.png';
import powiat from '../../Assets/partners/Minsk/powiat.png';
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent";
import stacjaDializ from "../../Assets/minsk_stacja.jpg";
import drMinsk from "../../Assets/dr-Minsk.jpg";
import nowyDzwon from "../../Assets/partners/Minsk/nowyDzwon.jpg"
import Layout from "../Common/Layout";
import {Helmet} from "react-helmet";
import React from "react";

export default function Minsk() {
    const general_partners = [
        <LogoPartner
            logo={burmistrz}
            link="https://www.minsk-maz.pl/"
            name="Marcin Jakubowski"
            desc="Burmistrz miasta Mińsk Mazowiecki"
        >
        </LogoPartner>,
        <LogoPartner
            logo={powiat}
            link="http://powiatminski.pl/"
            name="Antoni Jan Tarczyński"
            desc="Starosta Miński"
        >
        </LogoPartner>
    ]

    const media_partners = [
        <LogoPartner
            logo={nowyDzwon}
            link="http://www.nowydzwon.pl/"
        >
        </LogoPartner>
    ]


    return (
        <Layout>
            <Helmet>
                <meta
                    name="description"
                    content="W powiecie mińskim (województwo mazowieckie) rusza wirtualna poradnia nefrologiczna."
                />
                <meta name="keywords"
                      content="Mińsk, test, nerek, internetowy, ogólnopolski"
                />
                <title>Mińsk - ogólnopolski test zdrowia nerek</title>
            </Helmet>

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
                    W ramach badań profilaktycznych, mieszkańcy będą mogli wykonywać dwa testy - ogólne badanie moczu i
                    oznaczenie we krwi poziomu kreatyniny wraz z obliczeniem e-GFR. Pokażą one, czy nerki działają
                    prawidłowo. Pacjenci mogą wykonywać badania w laboratorium ALAB przy ulicy WArszawskiej 141 lok U2.
                    Laboratorium pobiera próbki od poniedziałku do piątku w godzinach 7:00-11:30, w soboty 8:00-12:30.
                </p>
                <p>
                    Akcja społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK będzie w Mińsku
                    Mazowieckim trwać od 8 listopada do 31 grudnia 2021.
                </p>
                <div className="img-container">
                    <img src={stacjaDializ} alt="stacja Dializ"/>
                    <img src={drMinsk} alt="dr Arkadiusz Bogucki"/>
                </div>
                <p>
                    Centrum Dializ Fresenius Nephrocare w Mińsku Mazowieckim, które opiekuje się chorymi na nerki w
                    powiecie działa już 5 lat - otwarto je w październiku 2016 roku. Ordynatorem Centrum jest dr
                    Arkadiusz Bogucki, nefrolog, współautor projektu OGÓLNOPOLSKI TEST ZDROWIA NEREK.
                </p>
                <p>
                    Ośrodek działa wyłącznie na podstawie kontraktu z Narodowym Funduszem Zdrowia.
                </p>

            </ScrollToSectionComponent>

            <Partners
                general={general_partners}
                media={media_partners}
            />
        </Layout>


    );
}