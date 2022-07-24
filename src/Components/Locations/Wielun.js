import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"
import Partners from "../Partners/Partners"
import LogoPartner from "../Partners/LogoPartner"
import skomlin from '../../Assets/partners/Wieluń/skomlin.png';
import tvWielun from '../../Assets/partners/Wieluń/TV-Wielun.png';
import dziennikLodzki from '../../Assets/partners/Wieluń/dziennik-lodzki.png';
import radioZw from '../../Assets/partners/Wieluń/radio_zw.png';
import drAndrzej from '../../Assets/dr-Andrzej-Redlicki.webp'
import stacjaDializ from '../../Assets/stacja-dializ.webp'
import "./Locations.css"
import burmistrz from "../../Assets/partners/Wieluń/burmistrz.png";
import Layout from "../Common/Layout";
import {Helmet} from "react-helmet";
import React from "react";

export default function Wielun() {
    const general_partners = [
        <LogoPartner
            logo= {burmistrz}
            link="https://www.um.wielun.pl/"
            name="Paweł Okrasa"
            desc="Burmistrz Wielunia"
        />,
        <LogoPartner
            logo={skomlin}
            link="https://www.skomlin.pl"
            name="Urząd Gminy Skomlin"
            desc=""
        />
    ]

    const media_parnters = [
        <LogoPartner
            logo={tvWielun}
            link="https://tvk.wielun.pl/"
            name="Telewizja Kablowa"
            desc="Wieluńskiej Spółdzielni Mieszkaniowej"
        />,
        <LogoPartner
            logo={dziennikLodzki}
            link="https://dzienniklodzki.pl/"
            name="Dziennik Łódzki"
            desc="wiadomości z Łodzi i województwa łódzkiego"
        />
        ,
        <LogoPartner
            logo={radioZw}
            link="https://www.radiozw.com.pl//"
            name="Radio Ziemi Wieluńskiej"
        />

    ]


    return (
        <Layout>
            {/*Metatags for SEO*/}
            <Helmet>
                <meta
                    name="description"
                    content="Powiat wieluński w województwie łódzkim jest pierwszym powiatem w Polsce, w którym ruszają: wirtualna poradnia nefrologiczna oraz kampania społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK."
                />
                <meta name="keywords"
                      content="Wieluń, test, nerek, internetowy, ogólnopolski"
                />
                <title>Wieluń - ogólnopolski test zdrowia nerek</title>
            </Helmet>

            <ScrollToSectionComponent className="InfoPage Wielun">
                <h1>Wieluń</h1>
                <p>
                    <b>
                        Powiat wieluński w województwie łódzkim jest pierwszym powiatem w Polsce, w którym ruszają:
                        wirtualna poradnia nefrologiczna oraz kampania społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK.
                    </b>
                </p>
                <p>
                    Na stronie głównej -
                    &nbsp;<a href={"/"}>www.poradnianefrologiczna.pl</a>&nbsp;
                    mieszkańcy powiatu mogą wypełnić prosty test, który pokaże w jakiej kondycji są ich nerki. Jeśli
                    pacjenci będą tego potrzebowali, po uzupełnieniu quizu, dostaną skierowanie na bezpłatne badania
                    nerek w Centrum Dializ Fresenius w Wieluniu.
                </p>
                <p>
                    W ramach badań profilaktycznych, mieszkańcy będą mogli wykonywać dwa badania - ogólne badanie moczu
                    i oznaczenie we krwi poziomu kreatyniny wraz z obliczeniem e-GFR. Te testy pokażą, czy coś złego
                    dzieje się w ich nerkach.

                </p>
                <div className="img-container">
                    <img src={drAndrzej} alt="drAndrzej"/>
                    <img src={stacjaDializ} alt="stacjaDializ"/>
                </div>

                <p>
                    Ekspertem medycznym akcji w Wieluniu jest dr Andrzej Redlicki, ordynator Centrum Dializ Fresenius w
                    tym mieście. Dr Redlicki jest jednym z współautorów testu zdrowia nerek. Stacja dializ w Wieluniu
                    dołączyła do sieci Centrum Dializ Fresenius w 2011 roku. Zlokalizowana jest w budynku Samodzielnego
                    Publicznego Zakładu Opieki Zdrowotnej w Wieluniu, z którym ściśle współpracuje w opiece nad
                    pacjentami z chorobami nerek. Nowoczesny ośrodek oferuje pacjentom leczenie za pomocą hemodializy. W
                    2016 stacja dializ przeszła gruntowny remont, dzięki czemu komfort leczenia pacjentów wzrósł jeszcze
                    bardziej.
                    <br/>
                    <i>Ośrodek działa wyłącznie na podstawie kontraktu z Narodowym Funduszem Zdrowia.</i>
                </p>
                <p>
                    Akcja społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK będzie w Wieluniu i okolicach trwać od 25
                    października do 31 grudnia 2021.

                </p>
            </ScrollToSectionComponent>

            <Partners
                general={general_partners}
                media={media_parnters}
            />
        </Layout>


    );
}