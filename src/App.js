import './OverallStyle.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Redux/Reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import SurveyContainer from "./Components/SurveyPage";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LandingPage from "./Components/LandingPage";
import ResultsPage from "./Components/ResultsPage";
import Privacy from "./Components/InfoPages/Privacy";
import CookiesPage from "./Components/Cookies/CookiesPage";
import Law from "./Components/InfoPages/Law";
import Minsk from "./Components/Locations/Minsk"
import Wielun from "./Components/Locations/Wielun"
import Contact from "./Components/ContactForm/Contact"
import AdminLogin from "./Components/AdminPanel/AdminLogin";
import ReactPixel from 'react-facebook-pixel';
import CookiesConsent from "./Components/Cookies/CookiesConsent";
import Mlawa from "./Components/Locations/Mlawa";

//FacebookPixel config
const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: false, // enable logs
};
ReactPixel.init(process.env.REACT_APP_PIXEL_ID,null, options);
//revoke consent by default
ReactPixel.revokeConsent();

//redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <CookiesConsent/>
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

                </div>
            </Router>
        </Provider>
    );
}


export default App;
