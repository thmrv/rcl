import React from "react";
import Button from "./button";

export default class TeamsTable extends React.Component {
    render() {
        return (<div class="teams-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Команды</div>
            <div class="title_md dark">СЕЗОН 2022/2023</div>
            <div class="teams_container">
                {this.props.teams.teams.map((team) => (<div class="team-block-wrapper">
                    <div class="team-block-logo"><img src={team.logo} class="img-team-logo"></img></div>
                    <div class="team-block-name">{team.name}</div>
                </div>)
                )}
            </div>
        </div>)
    }
}