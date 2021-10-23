import "./Footer.css"
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {setPreferencesOpen} from "../../Redux/Actions/cookieActions";

function Footer({dispatch}){
    return (
        <footer className="Footer">
            <div className="moreinfoContainer">
                <a href="https://www.nephrocare.pl/o-nas.html">Więcej o Fresenius Nephrocare</a>
            </div>
            <div className="hyperlinksContainer">
                <Link to={'/polityka-prywatnosci/'}> Polityka Prywatności </Link>
                <a onClick={()=>dispatch(setPreferencesOpen(true))}> Ustawienia plików cookie </a>
                <Link to={'/pliki-cookie'}> Polityka cookies </Link>
                <Link to={'/informacje-prawne/'}> Informacje prawne </Link>
            </div>
        </footer>
    );
}
export default  connect()(Footer);