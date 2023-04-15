import React from "react";
import LangSwitcher from "./langSwitcher";

export default class Nav extends React.Component {
    render() {
        return (<div class="navigation-top-wrapper">
           {this.props.bullets?.map(item => {
                return <a class='navigation-bullet' href={item.href}>{item.title}</a>;
            })}
            <LangSwitcher />
        </div>)
    }
}