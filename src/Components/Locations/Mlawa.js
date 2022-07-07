import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"
import Layout from "../Common/Layout";
import Partners from "../Partners/Partners"
import LogoPartner from "../Partners/LogoPartner"
import "./Locations.css"
import drPiotr from "../../Assets/dr_Piotr_Kozminski.jpg"
import burmistrz from "../../Assets/partners/Mlawa/burmistrz_nidzica.PNG"
import starosta from "../../Assets/partners/Mlawa/starosta_zuromski.png"
import zoz from  "../../Assets/partners/Mlawa/zespol_opieki_zdrowotnej_nidzica.png"
import radio7 from  "../../Assets/partners/Mlawa/radio_7.png"
import stacjaDializ from  "../../Assets/mlawa_stacja.jpg"

export default function Mlawa() {
    const general_partners = [
        <LogoPartner
            logo={burmistrz}
            link="https://www.nidzica.pl/"
            name="Jacek Kosmala"
            desc="Burmistrz Nidzicy"
        />,
        <LogoPartner
            logo={starosta}
            link="http://zuromin.ibip.net.pl/"
            name="Jerzy Rzymowski"
            desc="Starosta Żuromiński"
        />,
        <LogoPartner
            logo={zoz}
            link="https://zoz.nidzica.pl/"
            name="ZOZ Nidzica"
            desc="zespół opieki zdrowotnej"
        />
    ]

    const media_parnters = [
        <LogoPartner
            logo={radio7}
            link="https://radio7.pl/"
            name="Radio 7"
            desc="rozgłośnia Północnego Mazowsza "
        />,

    ]


    return (
        <Layout>
            <ScrollToSectionComponent className="InfoPage Mlawa">
                <h1>MŁAWA, ŻUROMIN, NIDZICA</h1>
                <p>
                    Na stronie głównej -
                    &nbsp;<a href={"/"}>www.poradnianefrologiczna.pl</a>&nbsp;
                    mieszkańcy powiatów: mławskiego,
                    żuromińskiego i nidzickiego mogą wypełnić prosty test, który pokaże w jakiej
                    kondycji są ich nerki. Jeśli pacjenci będą tego potrzebowali, po uzupełnieniu quizu, dostaną
                    skierowanie na bezpłatne badania nerek w najbliższym dla nich laboratorium ALAB.
                </p>
                <p>
                    W ramach badań profilaktycznych, mieszkańcy będą mogli wykonywać dwa badania -
                    ogólne badanie moczu i oznaczenie we krwi poziomu kreatyniny wraz z obliczeniem e - GFR. Te testy
                    pokażą, czy coś złego dzieje się w ich nerkach.
                </p>
                <p>
                    Akcja będzie trwała od połowy lipca 2022 do końca września tego roku.
                </p>
                <p>
                    Badania pokazują, że aż 30% pacjentów trafia na pierwszą w życiu dializę bezpośrednio z SOR,
                    gdzie przypadkiem, u pacjenta przywiezionego w ciężkim stanie ogólnym, wykrywa się skrajną
                    niewydolność nerek.
                </p>

                <div className="img-container">

                    <img src={stacjaDializ} alt="stacjaDializ"/>
                    <img src={drPiotr} alt="dr Piotr Koźmiński"/>
                </div>

                <p>
                    Centrum Dializ Fresenius w Mławie istnieje od 2006 roku.
                </p>
                <p>
                    Stacja znajduje się w n
                    owoczesnym parterowym budynku na terenie szpitala. Dysponuje
                    klimatyzowanymi salami z telewizorami i z węzłami sanitarnymi oraz szatniami dla
                    pacjentów. Jest wyposażona w nowoczesny sprzęt medyczny, umożliwiający wykonywanie
                    zabiegów hemodializ, hemodiafil
                    tracji i hemofiltracji. Dwie sale oraz wydzielone stanowiska,
                    których jest 19, umożliwiają bezpieczne wykonywanie zabiegów u pacjentów z różnym
                    profilem wirusowym, według światowych standardów.
                    Bezpłatny transport z domu na zabiegi
                    i z powrotem zapewniają
                    wygodne samochody
                    -
                    klimatyzowane busy.
                    Ośrodek działa
                    wyłącznie na podstawie kontraktu z Narodowym Funduszem Zdrowia.
                </p>
                <p>
                    Oprócz dializ zewnątrzustrojowych możliwe jest także leczenie dializą otrzewnową
                    –
                    wizyty
                    kontrolne i wymiany otrzewnowe odbywają się w
                    pododdziale dializ otrzewnowych. Przy
                    stacji funkcjonuje także poradnia nefrologiczna
                    .
                </p>
                <p>
                    Pacjenci objęci są kompleksową opieką: opieka przeddializacyjna, dializoterapia, kwalifikacja
                    do przeszczepu nerki lub nerki i trzustki. We współpracy z SP ZOZ Mława wyk
                    onywane są
                    dostępy naczyniowe oraz otrzewnowe do dializ. Nad pacjentami czuwają doświadczeni
                    lekarze, zespół pielęgniarski, personel administracyjny, techniczny i gospodarczy.
                </p>
                <p>
                    Ordynatorem Centrum Dializ jest
                    dr Piotr Koźmiński
                    , jeden z najważniejszych ekspertów
                    współ
                    tworzących Ogólnopolski Test Zdrowia Nerek.
                </p>
                <p>
                    Stacja zapewnia obsługę dializacyjną i nefrologiczną dla ok. 200 000 mieszkańców powiatów
                    mławskiego, żuromińskiego oraz ościennych gmin sąsiednich powiatów. Współpracuje
                    ze
                    szpitalem w Mławie oraz Żurominie, a także Oddziałem Nefrologicznym w Ciechanowie.
                </p>
            </ScrollToSectionComponent>

            <Partners
                general={general_partners}
                media={media_parnters}
            />
        </Layout>


    );
}