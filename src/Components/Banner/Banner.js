import "./Banner.css"
import logo from '../../Assets/freseniusLogo.png';
import useWindowDimensions from "../useWindowDimensions"
import {useHistory} from "react-router-dom";

function Banner() {
    //viewport width and height from hook
    const { height, width } = useWindowDimensions();
    //reroute to main page after click on logo
    const history = useHistory();
    const routeToMain = () => history.push(process.env.REACT_APP_TOKEN + '/');

    return (
        <div className="BannerContainer">
            <section className="Banner">
                {width>1100?
                    <div className="container">
                        <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                        <p>Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie wszystkich głównych narządów.
                            Choroby
                            nerek przebiegają bardzo długo bezobjawowo i często są wykrywane dopiero gdy nerki są już zupełnie
                            zniszczone. Życie chorego mogą wtedy uratować wyłącznie przeszczep lub dializa. Co trzecia osoba,
                            która przeszła COVID-19 może mieć nieodwracalnie uszkodzone nerki i nawet się tego nie domyślać. Test
                            nie zastępuje wizyty u lekarza, lecz może pomóc uratować nerki.</p>
                    </div>
                    :
                    <></>
                }
            </section>

            {width<=1100?
                <div className="container">
                    <h1>OGÓLNOPOLSKI <br/> TEST ZDROWIA NEREK</h1>
                    <p>Nerki to filtr życia, który odpowiada za prawidłowe funkcjonowanie wszystkich głównych narządów.
                        Choroby
                        nerek przebiegają bardzo długo bezobjawowo i często są wykrywane dopiero gdy nerki są już zupełnie
                        zniszczone. Życie chorego mogą wtedy uratować wyłącznie przeszczep lub dializa. Co trzecia osoba,
                        która przeszła COVID-19 może mieć nieodwracalnie uszkodzone nerki i nawet się tego nie domyślać. Test
                        nie zastępuje wizyty u lekarza, lecz może pomóc uratować nerki.</p>
                </div> :<div></div>
            }
        </div>


    );
}

// <img src={logo} alt="logo"/>
export default Banner;