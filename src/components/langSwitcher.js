import React from "react";

export default class LangSwitcher extends React.Component {
    render() {
        return (<div class="lang-switcher">
            <a href="#" class="navigation-bullet">RU</a>
            <span> / </span>
            <a href="#" class="navigation-bullet inactive">EN</a>
        </div>)
    }
}