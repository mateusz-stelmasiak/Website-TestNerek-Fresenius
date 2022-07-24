import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";


export default function Layout(props){
    return (
        <>
            <NavBar/>
            <Banner/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
    );
}