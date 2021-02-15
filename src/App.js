import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./reset.css";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
