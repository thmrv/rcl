import React from "react";
import Logo from "./logo.js";

export default class Footer extends React.Component {
    render() {
        return <div class="footer-wrapper">
            <div class="footer-top-strip">
                <div class="logo-wrapper">
                    <Logo footer={true} />
                </div>
                <div class="footer-teams-wrapper">
                    <div class="title_md">Команды</div>
                    <div class="footer-teams">
                        {this.props.teams.teams.map((team, index) => 
                            <a href="/teams" class="footer-bullet">{team.name}</a>
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
                    <div class="soc-links"><a href="#"><img src="/img/vk_white.svg"></img></a>
                        <a href="#"><img src="/img/telegram_white.svg"></img></a>
                        <a href="#"><img src="/img/twitch_white.svg"></img></a>
                        <a href="#"><img src="/img/youtube_white.svg"></img></a>
                    </div>
                </div>
            </div>
            <div class="footer-bot-strip">
                <div class="footer-links">
                    {this.props.links.map((title) => 
                        <a href="#" class="footer-bullet-lower">{title}</a>
                    )}
                </div>
                <div class="footer-disclaimer">{this.props.disclaimer}</div>
            </div>
        </div>
    }
}