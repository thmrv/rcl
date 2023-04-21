import React from "react";
import Timer from "./timer";
import Modal from "./modal";

export default class MastheadMatch extends React.Component {
    constructor(props){
        super(props)
        this.date = new Date(this.props.match.startedAt);
        this.currentDate = new Date();
        this.leagueTitle = 'РЕЗУЛЬТАТЫ МАТЧА';
    }
    
    render() {
        const showModal = (e) => {
            document.getElementById('modal-' + e.currentTarget.getAttribute('data-modal-id')).classList.remove('hidden');
            document.querySelector('body').style.overflowY = 'hidden';
        }
        let isMobile = window.screen.width > 1100 ? false : true;
        let self = this;
        let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        return (<div class="masthead-wrapper header-wrapper animate__animated animate__fadeIn" style={{ backgroundImage: isMobile ? "url(" + "/img/spread.png" + ")" : "url(" + "/img/masthead.png" + ")" }}>
            <div class="masthead-top">{this.leagueTitle}<img class="logo-vs-overexposed" src="/img/logo_white_opaque.png"></img></div>
            <div class="masthead-vs">
                <div class="vs-team-wrapper animate__animated animate__fadeInLeft">
                    <div class="vs-team-logo"><img class="featured-team-logo first" src={this.props.team1.logoDark}></img></div>
                    <div class="vs-team-name">{this.props.team1.name}</div>
                </div>
                <div class="vs-score-match animate__animated animate__fadeInDown">{this.props.match.status !== 'pending' ? this.props.match.team1Score + ' : ' + this.props.match.team2Score : 'СКОРО'}</div>
                <div class="vs-team-wrapper animate__animated animate__fadeInRight">
                    <div class="vs-team-name">{this.props.team2.name}</div>
                    <div class="vs-team-logo"><img class="featured-team-logo last" src={this.props.team2.logoDark}></img></div>
                </div>
            </div>
            <div class="vs-maps-wrapper">
                {this.props.match.maps.map((map) => (
                    <div onClick={showModal} data-modal-id={map.id} id={'showmodal-' + map.id} class="map-wrapper map"><div class={map.mapName !== null ? 'image-wrapper map loaded' : 'image-wrapper map'}><img src={map.mapName !== null ? 'https://www.hltv.org/img/static/statsmatchmaps/' + map.mapName.split("_").pop() + '.png' : '/img/logo_insert.svg'} class="map-img"></img></div>
                        <div class="map-score"><div class="map-score-text">{map.mapName ?? 'Карта неизвестна'}</div><div class="map-score-text">{map.team1Score + ' : ' + map.team2Score}</div></div>
                    </div>
                ))}
            </div>
            <div class="vs-watch-links"><div class="watch-now">Смотреть повтор:</div>
                <div class="watch-now-icons-wrapper">
                    <a href="https://www.twitch.tv/ruscyberleague"><img src="/img/twitch_white.svg" class="watch-now-icons"></img></a>
                    <a href="https://www.youtube.com/@ruscyberleaguecs"><img src="/img/youtube_white.svg" class="watch-now-icons"></img></a>
                    <a href="https://vk.com/ruscyberleague"><img src="/img/vk_white.svg" class="watch-now-icons"></img></a>
                </div>
            </div>
            {this.props.match.maps.map((map) => (
                <Modal id={map.id} playersTeam1={this.props.players1} playersTeam2={this.props.players2}/>
            ))}
        </div>)
    }

}