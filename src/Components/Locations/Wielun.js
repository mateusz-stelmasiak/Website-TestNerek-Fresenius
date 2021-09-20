import ScrollToSectionComponent from "../ScrollToSectionComponent"
import Partners from "../Partners/Partners"
import PersonPartner from "../Partners/PersonPartner"
import LogoPartner from "../Partners/LogoPartner"
import tvWielun from '../../Assets/partners/Wieluń/TV-Wielun.png';
import dziennikLodzki from '../../Assets/partners/Wieluń/dziennik-lodzki.png';
import drAndrzej from '../../Assets/dr-Andrzej-Redlicki.JPG'
import stacjaDializ from '../../Assets/stacja-dializ.jpg'
import "./Wielun.css"

export default function Wielun() {
    const general_partners = []

    const media_parnters = [
        <LogoPartner
            logo={tvWielun}
            link="https://tvk.wielun.pl/"
            name="Telewizja Kablowa"
            desc="Wieluńskiej Spółdzielni Mieszkaniowej"
        >
        </LogoPartner>,
        <LogoPartner
            logo={dziennikLodzki}
            link="https://dzienniklodzki.pl/"
            name="Dziennik Łódzki"
            desc="wiadomości z Łodzi i województwa łódzkiego"
        >
        </LogoPartner>
    ]


    return (
        <div>
            <ScrollToSectionComponent className="InfoPage Wielun">
                <h1>Wieluń</h1>
                <p>
                    <b>
                        Powiat wieluński w województwie łódzkim jest jednym z dwóch pierwszych powiatów w Polsce (wraz z
                        powiatem mińskim) w którym ruszają wirtualna poradnia nefrologiczna oraz kampania społeczna
                        OGÓLNOPOLSKI TEST ZDROWIA NEREK.

                    </b>
                </p>
                <p>
                    Na stronie głównej - <a
                    href="/process.env.REACT_APP_TOKEN/">www.poradnianefrologiczna.pl</a> mieszkańcy powiatu mogą
                    wypełnić prosty test,
                    który pokaże w jakiej kondycji są ich nerki. Jeśli pacjenci będą tego potrzebowali, po uzupełnieniu
                    quizu, dostaną skierowanie na bezpłatne badania nerek w miejscowym laboratorium.
                </p>
                <p>
                    W ramach badań profilaktycznych, mieszkańcy będą mogli wykonywać dwa badania - ogólne badanie moczu
                    i oznaczenie we krwi poziomu kreatyniny wraz z obliczeniem e-GFR. Te testy pokażą, czy coś złego
                    dzieje się w ich nerkach.

                </p>
                <div className="img-container">
                    <img src={drAndrzej}/>
                    <img src={stacjaDializ}/>
                </div>

                <p>
                    Ekspertem medycznym akcji w Wieluniu jest dr Andrzej Redlicki, ordynator Centrum Dializ Fresenius w
                    tym mieście. Dr Redlicki jest jednym z współautorów testu zdrowia nerek.
                    Stacja dializ w Wieluniu dołączyła do sieci Centrum Dializ Fresenius w 2011 roku. Zlokalizowana jest
                    w budynku Samodzielnego Publicznego Zakładu Opieki Zdrowotnej w Wieluniu, z którym ściśle
                    współpracuje w opiece nad pacjentami z chorobami nerek.
                    Nowoczesny ośrodek oferuje pacjentom leczenie za pomocą hemodializy.
                    W 2016 stacja dializ przeszła gruntowny remont, dzięki czemu jeszcze bardziej podniesiony został
                    komfort pacjentów.
                    <br/>
                    <i>Ośrodek działa wyłącznie na podstawie kontraktu z Narodowym Funduszem Zdrowia.</i>
                </p>
                <p>
                    Akcja społeczna OGÓLNOPOLSKI TEST ZDROWIA NEREK będzie w Wieluniu i okolicach trwać od sierpnia do października 2021.

                </p>
            </ScrollToSectionComponent>

            <Partners
                media={media_parnters}
            />
        </div>


    );
}