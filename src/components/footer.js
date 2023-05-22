import React from "react";
import Logo from "./logo.js";
import SocFooter from "./social_footer.js";
import LogoStrip from "./logoStrip.js";

let docLinks = ['/docs/Kartochka_organizacii.pdf', '/docs/Usloviya_polzovania_saitom.docx', '/docs/Contacts.pdf',]

export default class Footer extends React.Component {
    render() {
        let isMobile = window.screen.width > 1100 ? false : true;
        let switchLogo = isMobile ? true : false;
        return <div class="footer-wrapper">
            <div class="footer-top-strip">
                <div class="logo-wrapper">
                    <Logo footer={true} variant={switchLogo}/>
                </div>
                <div class="footer-teams-wrapper">
                    <div class="title_md">Команды</div>
                    <div class="footer-teams">
                        {this.props.teams.teams.map((team, index) => 
                            <a href={'/team/' + team.id} class="footer-bullet">{team.name}</a>
                        )}
                    </div>
                </div>
                <div class="footer-navigation-wrapper">
                    <div class="title_md">Основное</div>
                    <div class="footer-navigation">
                        {this.props.general.map((item) => 
                            <a href={item.link} class="footer-bullet">{item.text}</a>
                        )}
                    </div>
                </div>
                <div class="footer-navigation-contacts">
                    <div class="title_md">Контакты</div>
                    <div class="footer-contacts">
                        <a class="footer-bullet">{this.props.contacts.email}</a>
                        <a href={'tel:' + this.props.contacts.phone} class="footer-bullet">{this.props.contacts.phone}</a>
                    </div>
                </div>
                <div class="social-wrapper">
                    <SocFooter />
                </div>
            </div>
            <div class="logo-strip-wrapper">
                        <LogoStrip />
                </div>
            <div class="footer-bot-strip">
                <div class="footer-links">
                    {this.props.links.map((title, index) => 
                        <a href={docLinks[index]} class="footer-bullet-lower">{title}</a>
                    )}
                </div>
                <div class="footer-disclaimer">{this.props.disclaimer}</div>
            </div>
        </div>
    }
}