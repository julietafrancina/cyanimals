import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/index";
import About from "./pages/About/About";
import "./reset.css";
import "./components/styles.scss";

function App() {
    return (
        <section className="App">
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                </Switch>
            </Router>
        </section>
    );
}

export default App;
