import React from "react";
import LangSwitcher from "./langSwitcher";

export default class Nav extends React.Component {
    render() {
        if (!this.props.isMobile) {
            return (<div class="navigation-top-wrapper">
                {this.props.bullets?.map(item => {
                    return <a class='navigation-bullet' href={item.href}>{item.title}</a>;
                })}
                <LangSwitcher />
            </div>)
        } else {
            return (<div class="navigation-top-wrapper mobile">
                {this.props.bullets?.map(item => {
                    return <a class='navigation-bullet mobile' href={item.href}>{item.title}</a>;
                })}
            </div>)
        }
    }
}