import {Link} from "react-router-dom";
import "./NavBar.css"
import "./BurgerMenu.css"
import logo from '../../Assets/freseniusLogo.png';
import {useHistory} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";

export default function NavBar() {
    //reroute to main page after click on logo
    const history = useHistory();
    const routeToMain = () => history.push(process.env.REACT_APP_TOKEN + '/');

    const menuButtons =
        <>
            <Link to={process.env.REACT_APP_TOKEN + '/minsk-mazowiecki/'}>MIŃSK MAZOWIECKI</Link>
            <Link to={process.env.REACT_APP_TOKEN + '/wielun'}>WIELUŃ</Link>
            <Link to={process.env.REACT_APP_TOKEN + '/sprawdz-wyniki/'}>SPRAWDŹ WYNIKI</Link>
            <Link to={process.env.REACT_APP_TOKEN + '/kontakt/'}>KONTAKT</Link>
        </>


    return (
        <header className="NavBar-container">
            <div className="NavBar">

                <img src={logo} alt="logo" onClick={routeToMain}/>

                <div className="buttons-container">
                    {menuButtons}
                </div>

                <BurgerMenu>
                    {menuButtons}
                </BurgerMenu>

            </div>
        </header>


    );
}