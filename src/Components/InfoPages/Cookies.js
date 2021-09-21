import "./InfoPages.css"
import ScrollToSectionComponent from "../Common/ScrollToSectionComponent"

export default function Cookies() {
    return (
        <ScrollToSectionComponent className="InfoPage">
            <h1>Ustawienia cookies</h1>
            <p>
                Odwiedzając dowolną witrynę internetową, może ona przechowywać lub pobierać informacje w przeglądarce,
                głównie w formie plików cookie. Informacje te mogą dotyczyć Ciebie, Twoich preferencji, urządzenia lub
                być wykorzystywane do tego, aby strona działała tak, jak tego oczekujesz. Informacje te zazwyczaj nie
                identyfikują Cię bezpośrednio, ale mogą dostarczyć bardziej spersonalizowanych wrażeń podczas
                korzystania z Internetu.
            </p>
            <h4>DEKLARACJA DOTYCZĄCA PLIKÓW COOKIE</h4>
            <p>
                Ta strona <b>nie wykorzystuje</b> plików cookie.
            </p>

        </ScrollToSectionComponent>
    );
}