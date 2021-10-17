import './OverallStyle.css';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./Redux/Reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import SurveyContainer from "./Components/SurveyPage";
import {BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';
import Banner from "./Components/Banner/Banner";
import LandingPage from "./Components/LandingPage";
import Footer from "./Components/Footer/Footer";
import ResultsPage from "./Components/ResultsPage";
import Privacy from "./Components/InfoPages/Privacy";
import Cookies from "./Components/InfoPages/Cookies";
import Law from "./Components/InfoPages/Law";
import UnderConstruction from "./Components/Common/UnderConstruction";
import NavBar from "./Components/NavBar/NavBar"
import Minsk from "./Components/Locations/Minsk"
import Wielun from "./Components/Locations/Wielun"
import Contact from "./Components/ContactForm/Contact"
import ResultsChecker from "./Components/ResultsChecker/ResultsChecker"
import AdminLogin from "./Components/AdminPanel/AdminLogin";

//redux store
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

function App() {

  return (
      <Provider store={store}>
          <Router>
                  <div className="App">
                    <Switch>
                        <Route path={process.env.REACT_APP_TOKEN}>
                            <NavBar/>
                            <Banner/>
                            <Switch>
                                <Route path={process.env.REACT_APP_TOKEN+"/test"}>
                                    <SurveyContainer/>
                                </Route>

                                <Route path={process.env.REACT_APP_TOKEN+"/wyniki"} >
                                    <ResultsPage/>
                                </Route>

                                <Route path={process.env.REACT_APP_TOKEN+"/polityka-prywatnosci"}>
                                    <Privacy/>
                                </Route>

                                <Route path={process.env.REACT_APP_TOKEN+"/pliki-cookie"}>
                                    <Cookies/>
                                </Route>

                                <Route path={process.env.REACT_APP_TOKEN+"/informacje-prawne"}>
                                    <Law/>
                                </Route>

                                <Route path={process.env.REACT_APP_TOKEN+"/minsk-mazowiecki"}>
                                    <Minsk/>
                                </Route>
                                <Route path={process.env.REACT_APP_TOKEN+"/wielun"}>
                                    <Wielun/>
                                </Route>

                                {/*<Route path={process.env.REACT_APP_TOKEN+"/sprawdz-wyniki"}>*/}
                                {/*    <ResultsChecker/>*/}
                                {/*</Route>*/}

                                <Route path={process.env.REACT_APP_TOKEN+"/kontakt"}>
                                    <Contact/>
                                </Route>


                                <Route path={process.env.REACT_APP_TOKEN+"/"}>
                                    <LandingPage/>
                                </Route>


                                <Redirect from="*" to="/" />
                            </Switch>
                            <Footer/>
                        </Route>

                        <Route path={"/admin"}>
                            <AdminLogin/>
                        </Route>

                    </Switch>


                      <Route path="/" exact component={UnderConstruction}/>


                  </div>
          </Router>
      </Provider>
  );
}

//TO DO <Redirect from="*" to="/" />
export default App;
