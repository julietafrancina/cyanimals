import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Home from "./pages/Home";
import Lost from "./pages/Lost";
import Stray from "./pages/Stray";
import Adoption from "./pages/Adoption";
import About from "./pages/About/About";
import "./App.scss";
import "./reset.css";
import "./components/styles.scss";

function App() {
    return (
        <section className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/perdidos" component={Lost} />
                    <Route exact path="/visto-calle" component={Stray} />
                    <Route exact path="/adopcion" component={Adoption} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </section>
    );
}

export default App;
