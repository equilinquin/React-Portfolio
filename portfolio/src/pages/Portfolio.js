import React, {Component} from "react";
import PortfolioArea from "../components/PortfolioArea";
import Header from "../components/Header";
import Footer from "../components/Footer";
import project from "../project.json";

class Portfolio extends Component {
    state = {
        project
    };

    render() {
        return (
            <Header />
        )
    }
}


