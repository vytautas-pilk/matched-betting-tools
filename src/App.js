import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Tools from "./Tools";
import Welcome from "./Welcome";
import { Switch, Route } from "react-router-dom";
import "./CSS/App.css";

function App() {
    
    return (
        <div className="App">
            <Header />
            <Navigation />
            <main className="Main-Content">
                <Switch>
                    <Route exact path="/" render={ () => (Welcome) } />
                    <Route path="/tools" component={Tools} />
                </Switch>
            </main>
        </div>
    )
}

export default App;
