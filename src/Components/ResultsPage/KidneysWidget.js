import KidneyIcon from "./KidneyIcon"
import './KidneysWidget.css'

export default function KidneysWidget({color}){
    let root = document.documentElement;
    root.style.setProperty('--kidney-color', color);

    return  (
        <div className="KidneysWidget">
            <KidneyIcon direction="left"/>
            <KidneyIcon direction="right"/>
        </div>
    );
}