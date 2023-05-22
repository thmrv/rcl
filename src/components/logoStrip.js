import React from "react";

export default class LogoStrip extends React.Component {
    render() {
        let isMobile = window.screen.width > 1100 ? false : true;
        if (!isMobile){
            return (<div class="logo-strip desktop">
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_gd.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_fcsr.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_syn.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_odinn.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_aim.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_gil.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_coug.svg"></img></div>
            </div>)
        } else {
            return (<div class="logo-strip mobile">
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_gd_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_fcsr_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_syn_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_odinn_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_aim_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_gil_inverse.svg"></img></div>
                        <div class="image-wrapper"><img class="logo-strip-img" src="img/logo_coug_inverse.svg"></img></div>
            </div>)
        }
    }
}