import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from "react-router-dom";

//  My Components
import Header from './components/Header.js'
import HomeGuest from './components/HomeGuest.js'
import Footer from './components/Footer.js'
import About from './components/About'
import Terms from './components/Terms'

function Main () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/" exact><HomeGuest/></Route>
                <Route path="/about-us" exact><About/></Route>   
                <Route path="/terms" exact><Terms/></Route> 
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

ReactDOM.render(<Main />, document.querySelector("#app"))

if(module.hot) {
    module.hot.accept()
}