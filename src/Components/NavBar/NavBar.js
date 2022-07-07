import {Link} from "react-router-dom";
import "./NavBar.css"
import "./BurgerMenu.css"
import logo from '../../Assets/freseniusLogo.png';
import {useHistory} from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import logoSvg from '../../Assets/freseniusLogo.svg';

import React from "react";
import HighContrastModeSwitch from "./HighContastModeSwitch";
import FreseniusLogo from "./FreseniusLogo";

export default function NavBar() {
    //reroute to main page after click on logo
    const history = useHistory();
    const routeToMain = () => history.push('/');


    //get banner hight from DOM
    function getBannerHeight(){
        let bannerElement = document.querySelector('.BannerContainer');
        return bannerElement.clientHeight
    }

    let scrollPastBanner = ()=>{
        let scrollTo = getBannerHeight();
        window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    };

    const menuButtons =
        <>
            <Link to={'/mlawa/'}>MŁAWA</Link>
            <Link to={'/minsk-mazowiecki/'}>MIŃSK MAZOWIECKI</Link>
            <Link to={'/wielun'}>WIELUŃ</Link>
            {/*<Link to={'/sprawdz-wyniki/'}>SPRAWDŹ WYNIKI</Link>*/}
            <Link to={'/?test=true'} onClick={scrollPastBanner}>TEST</Link>
            <Link to={'/kontakt/'}>KONTAKT</Link>
        </>


    return (
        <header className="NavBar-container">
            <div className="NavBar">

                <FreseniusLogo onClick={routeToMain}/>

                <div className="buttons-container">
                    {menuButtons}
                </div>

                <BurgerMenu>
                    {menuButtons}
                </BurgerMenu>
                <HighContrastModeSwitch/>

            </div>
        </header>


    );
}