import "./Footer.css"
import {Link, Route} from "react-router-dom";
import Privacy from "../InfoPages/Privacy";
import Cookies from "../InfoPages/Cookies";

function Banner(){
    return (
        <footer className="Footer">
            <div className="moreinfoContainer">
                <a href="https://www.nephrocare.pl/o-nas.html">Więcej o Fresenius Nephrocare</a>
            </div>
            <div className="hyperlinksContainer">
                <Link to={process.env.REACT_APP_TOKEN+'/polityka-prywatnosci/'}> Polityka Prywatności </Link>
                <Link to={process.env.REACT_APP_TOKEN+'/pliki-cookie'}> Ustawienia plików cookie </Link>
                <Link to={process.env.REACT_APP_TOKEN+'/informacje-prawne/'}> Informacje prawne </Link>
            </div>
        </footer>
    );
}
export default Banner;