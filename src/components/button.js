
import React from "react";

export default class Button extends React.Component {
    render() {
        return (<div data-attr={this.props.attr} class={this.props.class}>{this.props.text}</div>)
    }
}