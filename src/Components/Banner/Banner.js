import "./Banner.css"
import "animate.css"

import useWindowDimensions from "../Common/useWindowDimensions"
import {useEffect, useState} from "react";
import ScrollDownPrompt from "./ScrollDownPrompt";
import {connect} from "react-redux";

function Banner({highContrast}) {
    //viewport width and height from hook
    const { height, width } = useWindowDimensions();
    const [backgroundImage,setBackgroundImage]=useState('none');
    let src = 'https://poradnianefrologiczna.pl/static/media/banner_recolor.f793798f.webp';
    let decoloredSrc='https://poradnianefrologiczna.pl/static/media/banner_derecolor.webp';


    useEffect(()=>{
        let image = new Image();
        image.src = highContrast? decoloredSrc:src;
        //animates banner only once bg image has been loaded
        image.onload = () => {
            setBackgroundImage(highContrast? 'url(' + decoloredSrc + ')':'url(' + src + ')');
            document.documentElement.style.setProperty('--hand-animation-state', 'running');
        };
    },[])


    //get navbar height from DOM
    let getNavbarHeight = ()=>{
        let navbarElement = document.querySelector('.NavBar-container');
        if(!navbarElement) return -1;
        return navbarElement.clientHeight
    }


    let mainText="Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie " +
        "wszystkich głównych narządów. Choroby nerek przebiegają bardzo długo " +
        "bezobjawowo i często są wykrywane dopiero gdy nerki są już zupełnie " +
        "zniszczone. Życie chorego mogą wtedy uratować wyłącznie przeszczep lub " +
        "dializa. Co trzecia osoba, która przeszła COVID-19 może mieć " +
        "nieodwracalnie uszkodzone nerki i nawet się tego nie domyślać. Co ósmy " +
        "Polak choruje na nerki, choć o tym nie wie. Test nie zastępuje wizyty u " +
        "lekarza, lecz może pomóc uratować życie."

    useEffect(()=>{
        var element = document.getElementById('baner1');
        if(!element) return;

        let newBackground=highContrast? 'url(' + decoloredSrc + ')':'url(' + src + ')';
        element.style.backgroundImage= newBackground;
    },[highContrast])

    return (
        <div className="BannerContainer">
            <section
                id='baner1'
                className="Banner"
                style={{backgroundImage: backgroundImage}}
            >
                {width>1100 &&
                    <>
                        <div className="container">
                            <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                            <p>{mainText}</p>
                        </div>
                        <ScrollDownPrompt/>
                    </>
                }
            </section>

            {width<=1100 &&
                <div className="container">
                    <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                    <p>{mainText}</p>
                </div>
            }
        </div>


    );
}

const mapStateToProps = (state) => {
    return {
        highContrast: state.theme.highContrast,
    };
};

export default connect(mapStateToProps)(Banner);