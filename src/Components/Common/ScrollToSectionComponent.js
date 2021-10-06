import {useEffect} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSectionComponent(props) {
    const { pathname } = useLocation();

    //get banner hight from DOM
    function getBannerHeight(){
        let bannerElement = document.querySelector('.BannerContainer');
        return bannerElement.clientHeight
    }

    useEffect(() => {
        let scrollTo = getBannerHeight();
        window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    });

    return (
        <section className={props.className}>
            {props.children}
        </section>
        );

}