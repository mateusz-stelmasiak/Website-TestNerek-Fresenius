import {Redirect, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import SurveyContainer from "./Components/SurveyPage";
import ResultsPage from "./Components/ResultsPage";
import Privacy from "./Components/InfoPages/Privacy";
import CookiesPage from "./Components/Cookies/CookiesPage";
import Law from "./Components/InfoPages/Law";
import Minsk from "./Components/Locations/Minsk";
import Wielun from "./Components/Locations/Wielun";
import Mlawa from "./Components/Locations/Mlawa";
import Contact from "./Components/ContactForm/Contact";
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import {BrowserRouter as Router} from "react-router-dom";

export default function RouterComponent(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage}/>

                <Route path="/test" component={SurveyContainer}/>

                <Route path="/wyniki" component={ResultsPage}/>

                <Route path="/polityka-prywatnosci" component={Privacy}/>

                <Route path="/pliki-cookie" component={CookiesPage}/>

                <Route path="/informacje-prawne" component={Law}/>

                <Route path="/minsk-mazowiecki" component={Minsk}/>

                <Route path="/wielun" component={Wielun}/>

                <Route path="/mlawa" component={Mlawa}/>

                {/*<Route path={"/sprawdz-wyniki"}>*/}
                {/*    <ResultsChecker/>*/}
                {/*</Route>*/}

                <Route path="/kontakt" component={Contact}/>

                <Route exact path={"/admin"} component={AdminLogin}/>

                <Redirect to={'/'} from={'*'}/>
            </Switch>
        </Router>
    );
}