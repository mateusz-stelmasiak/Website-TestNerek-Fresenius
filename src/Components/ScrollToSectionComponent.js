import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToSectionComponent(props: React.PropsWithChildren<MyProps>,height,className) {
    const { pathname } = useLocation();
    const [bannerHeight,setBannerHeight]=useState(-1);

    //get banner hight from DOM
    function getBannerHeight(){
        let bannerElement = document.querySelector('.BannerContainer');
        return bannerElement.clientHeight
    }

    useEffect(() => {
        let scrollTo = getBannerHeight();
        window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    }, [pathname]);

    return (
        <section className={props.className}>
            {props.children}
        </section>
        );

}