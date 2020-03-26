import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";



function App() {
  return (
    <Router>
      <div>      
        <Header />
          <Switch>
            <Route exact path="/">
              <AboutMe />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
          <Footer />
          </div>

      </Router>

  )
}

export default App;
