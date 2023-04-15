import React from "react";

export default class Logo extends React.Component {
    render() {
        let img = '/img/logo.svg';
        if (typeof this.props.footer !== 'underfined' && this.props.footer){
            img = '/img/logo_white.svg';
        }
        return <img class="" src={img} alt="logo"></img>
    }
}