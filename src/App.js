import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Navbar from './components/Navbar/index';
import ActionBtns from "./components/ActionBtns";

function App() {
    return (
        <section className='App'>
            <Router>
                <Navbar />
                <ActionBtns />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </section>
    );
}

export default App;
