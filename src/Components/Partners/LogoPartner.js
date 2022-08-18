import "./LogoPartner.css"
import PersonPartner from "./PersonPartner"

export default function LogoPartner({logo,link,name,desc}){
    function routeToPage(){
        window.location.href = link;
    }

    return (
        <div className="LogoPartner">
            <div className="img-container">
                <img src={logo} alt={"logo"+name} onClick={routeToPage}/>
            </div>

            <PersonPartner
                name={name}
                desc={desc}
            />
        </div>
    );
}