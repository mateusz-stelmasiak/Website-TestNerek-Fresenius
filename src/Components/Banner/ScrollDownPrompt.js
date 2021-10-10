import "./ScrollDownPrompt.css"
import "animate.css"

export default function ScrollDownPrompt() {
    //get banner hight from DOM
    function getBannerHeight(){
        let bannerElement = document.querySelector('.BannerContainer');
        return bannerElement.clientHeight
    }

    let scrollPastBanner = ()=>{
        let scrollTo = getBannerHeight();
        window.scrollTo({ top: scrollTo, behavior: 'smooth' })
    };

    return (
        <div onClick={scrollPastBanner} className="ScrollDownPrompt">
            <div className="mouse"/>
            PRZEWIŃ W DÓŁ
        </div>
    )
}