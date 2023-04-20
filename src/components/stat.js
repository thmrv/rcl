import React from "react";

export default class Stat extends React.Component {
    render() {
        return (<div class="stat-wrapper animate__animated animate__fadeInDown">
            <div class="stat-title">{this.props.title}</div>
            <div class="stat-values">{this.props.values.map((value, index) => (
                <>{this.props.values.length > 1 && index !== this.props.values.length -1 ? value + '/' : this.props.title === 'K/D' || this.props.value === 'K/D разница' ? value.toFixed(2) : value}</>
            )
            )}</div>
        </div>)
    }
}