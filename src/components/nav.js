import React, { Component } from 'react';
// import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Clock from "react-live-clock";
import $ from 'jquery';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            home: true,
            avion: false,
            meteo: false,
            mission: false
        };

        this.fhome = this.fhome.bind(this);
        this.favion = this.favion.bind(this);
        this.fmeteo = this.fmeteo.bind(this);
        this.fmission= this.fmission.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.scrollHeader = this.scrollHeader.bind(this);

        window.onscroll = () => {
            this.scrollHeader();
        };
    }

    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    scrollHeader = () => {
        var header = $(".navbar");
        if (window.pageYOffset > 130) {
            $(header).addClass("sticky");
          } else {
            $(header).removeClass("sticky");
          }
    };

    fhome = () => {
        this.setState({
            home: true,
            avion: false,
            meteo: false,
            mission: false
        });
    };

    favion = () => {
        this.setState({
            home: false,
            avion: true,
            meteo: false,
            mission: false
        });
    };

    fmission= () => {
        this.setState({
            home: false,
            avion: false,
            meteo: false,
            mission: true
        });
    };

    fmeteo = () => {
        this.setState({
            home: false,
            avion: false,
            meteo: true,
            mission: false
        });
    };

    // scrollHeader = () => {
    //     var header = $("#header");
    //     if (window.pageYOffset > 100) {
    //         $(header).addClass("sticky");
    //         //$(header).css({"background": "rgba(30, 67, 86, 0.8)", "height": "60px"});
    //     } else {
    //         $(header).removeClass("sticky");
    //         //$(header).css({"background": "none"});
    //     }
    // };

    render() {
        const { isOpen, home, avion,meteo, mission} = this.state
        return (
            <>
               <nav className="navbar navbar-expand-lg navbar bg-dark navbar-dark">
                <a href="#" className="navbar-brand">SLAM-System</a>
                <button  
                    className="navbar-toggler"
                    type="button"
                    // data-toggle="collapse"
                    data-target="#navbarCollapse1"
                    aria-controls="navbarCollapse1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={this.handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>



                <div className="collapse navbar-collapse" id="navbarCollapse1">
                    <div className="navbar-nav mr-auto">
                        <Link className={(home ? 'nav-item nav-link active' : 'nav-item nav-link') + ''} to="/home" onClick={this.fhome}>Accueil</Link>
                        <Link className={(avion ? 'nav-item nav-link active' : 'nav-item nav-link') + ''} to="/" onClick={this.favion}>Avions</Link>
                        <Link className={(meteo ? 'nav-item nav-link active' : 'nav-item nav-link') + ''} to="/meteo" onClick={this.fmeteo}>Météo</Link>
                        <Link className={(mission ? 'nav-item nav-link active' : 'nav-item nav-link') + ''} to="/" onClick={this.fmission}>Mission</Link>
                    </div>
                    <div className="current-time">
                    <Clock format="HH:mm:ss" interval={1000} ticking={true} />
                  </div>
                </div>
            </nav> 
            </>
        )
    }
}

