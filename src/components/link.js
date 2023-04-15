import React from "react";

export default class Link extends React.Component {
    render() {
        return <a href={this.props.link} class={this.props.class ?? 'link-general'}>{this.props.text}</a>
    }
}