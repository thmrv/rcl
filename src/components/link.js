import React from "react";

export default class Link extends React.Component {
    render() {
        return <a href={this.props.link} data-attr={this.props.attr} class={this.props.class ?? 'link-general'}>{this.props.text}</a>
    }
}