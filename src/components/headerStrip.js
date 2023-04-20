import React from "react";

export default class HeaderStrip extends React.Component {
    render() {
        return <div class="header-strip-wrapper animate__animated animate__fadeInDown">
            {this.props.teams.teams?.map(team => (
                <a href={'/team/' + team.id} target="_blank" class="team_wrapper" id={team.id}><img src={team.logo} alt={team.name}></img></a>
            ))}
        </div>
    }
}