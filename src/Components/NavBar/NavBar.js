import {Link, Route} from "react-router-dom";
import "./NavBar.css"
import "./BurgerMenu.css"
import logo from '../../Assets/freseniusLogo.png';
import {useHistory} from "react-router-dom";
import useWindowDimensions from "../useWindowDimensions";
import {useState} from "react";
import BurgerMenu from "./BurgerMenu";

export default function NavBar() {
    //reroute to main page after click on logo
    const history = useHistory();
    const routeToMain = () => history.push(process.env.REACT_APP_TOKEN + '/');
    //viewport width and height from hook
    const {height, width} = useWindowDimensions();
    const [sideMenuOpen,setSideMenuOpen]=useState(false);

    let closeMenu = ()=>{
        console.log("test");
        setSideMenuOpen(false);
    }

    let openMenu  = ()=>{
        console.log("test");
        setSideMenuOpen(true);
    }

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