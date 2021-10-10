import "./Banner.css"
import "animate.css"

import useWindowDimensions from "../Common/useWindowDimensions"
import {useState} from "react";
import ScrollDownPrompt from "./ScrollDownPrompt";

export default function Banner() {
    //viewport width and height from hook
    const { height, width } = useWindowDimensions();
    const [backgroundImage,setBackgroundImage]=useState('none');
    let src = 'https://poradnianefrologiczna.pl/static/media/banner_recolor.f793798f.png';
    let image = new Image();
    image.src = src;

    //animates banner only once bg image has been loaded
    image.onload = () => {
        setBackgroundImage('url(' + src + ')');
        document.documentElement.style.setProperty('--hand-animation-state', 'running');
    };

    return (
        <div className="BannerContainer">
            <section
                className="Banner"
                style={{backgroundImage: backgroundImage}}
            >
                {width>1100 &&
                    <>
                        <div className="container">
                            <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                            <p>Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie wszystkich głównych narządów.
                                Choroby
                                nerek przebiegają bardzo długo bezobjawowo i często są wykrywane dopiero gdy nerki są już zupełnie
                                zniszczone. Życie chorego mogą wtedy uratować wyłącznie przeszczep lub dializa. Co trzecia osoba,
                                która przeszła COVID-19 może mieć nieodwracalnie uszkodzone nerki i nawet się tego nie domyślać. Test
                                nie zastępuje wizyty u lekarza, lecz może pomóc uratować nerki.</p>
                        </div>
                        <ScrollDownPrompt/>
                    </>
                }
            </section>

            {width<=1100 &&
                <div className="container">
                    <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                    <p>Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie wszystkich głównych narządów.
                        Choroby
                        nerek przebiegają bardzo długo bezobjawowo i często są wykrywane dopiero gdy nerki są już zupełnie
                        zniszczone. Życie chorego mogą wtedy uratować wyłącznie przeszczep lub dializa. Co trzecia osoba,
                        która przeszła COVID-19 może mieć nieodwracalnie uszkodzone nerki i nawet się tego nie domyślać. Test
                        nie zastępuje wizyty u lekarza, lecz może pomóc uratować nerki.</p>
                </div>
            }
        </div>


    );
}
