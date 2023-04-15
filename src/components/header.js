import React from "react";
import Logo from "./logo.js";
import Nav from "./nav.js";
import Soc from "./social.js"
import HeaderStrip from "./headerStrip.js";

export default class Header extends React.Component {
    render() {
        return (<div class="header-wrapper animate__animated animate__fadeIn">
            <div class="header-top-strip">
                <div class="logo-wrapper">
                    <Logo />
                </div>
                <div class="navigation-wrapper">
                    <Nav bullets={this.props.bullets}/>
                </div>
                <div class="social-wrapper">
                    <Soc />
                </div>
            </div>
            <div class="header-bot-strip">
                <HeaderStrip teams={this.props.teams}/>
            </div>
        </div>);
    }
}
