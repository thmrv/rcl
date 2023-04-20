import { Outlet, Link } from "react-router-dom";
import Component from "react";
import Header from '../components/header.js';
import Masthead from '../components/masthead.js';
import Footer from '../components/footer.js';
import { useParams } from "react-router-dom";
import fetchHelper from "../fetchHelper.js";

import { useEffect, useState } from 'react';

let teams, featured, articles, pending, shortTourTable, players, matches, shortResults;
let endpoints = { 'teams': 'https://api.itsport.pro/teams?take=10', 'pending': 'https://api.itsport.pro/pending', 'shortResults': 'https://api.itsport.pro/shortresults?skip=0&take=10', 'articles': 'https://api.itsport.pro/news?skip=0&take=10', 'players': 'https://api.itsport.pro/players?skip=0&take=25,' };

function Layout() {
    let { playerId, matchId, articleId } = useParams();

    // TODO вынести из мейна куда нибудь в конфиг всю статику
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    // Navigation bullets
    let bullets = [{ 'href': '/news', 'title': 'Новости' }, { 'href': '/matches', 'title': 'Результаты' }, { 'href': '/teams', 'title': 'Команды' }, { 'href': '/players', 'title': 'Игроки' }, { 'href': '/docs', 'title': 'Документы' }];

    // Footer constants
    let contacts = { 'phone': '+7 495 7972727', 'email': 'info@ruscyberleague.ru' };
    let footer_general = [{ 'link': '/news', 'text': 'Новости' }, { 'link': '/matches', 'text': 'Результаты' }, { 'link': '/players', 'text': 'Игроки' }, { 'link': '/#', 'text': 'Документы' }];
    let footer_links = ['СВЕДЕНИЯ ОБ ОРГАНИЗАЦИИ', 'УСЛОВИЯ ПОЛЬЗОВАНИЯ САЙТОМ', 'КОНТАКТЫ']; // TODO рефактор со ссылками, пока пустые
    let disclaimer = '© RCL 2021—' + currentYear + ' Все права защищены';

    useEffect(() => {
        setLoading(true)
        fetchHelper(window.apiHost + 'teams?take=25').then((data) => teams = data).finally(() => {
            if (typeof teams === 'undefined') {
                setError(true)
            }
            if (!setError()) {
                setData(true)
                setLoading(false)
            }
        })
    }, [setData]);

    if (loading) return (<div class="loader main">
        <div class="preloader">
        <svg width="55" height="auto" viewBox="0 0 86 104" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29381 76.1494L1.91922 84.7006C1.87671 84.8083 1.8687 84.9266 1.89629 85.0391C2.29651 86.6704 2.93949 88.2324 3.80371 89.6728L4.00003 90L4.70421 90.6338C7.542 93.1878 10.8412 95.1766 14.4247 96.4936L16.5 97.2563L17.7858 97.4475C20.2451 97.8133 22.7479 97.7711 25.1935 97.3226C25.4215 97.2807 25.6177 97.1363 25.7253 96.9309L30.5648 87.6921C30.6947 87.4442 30.7147 87.1532 30.62 86.8898L29.7734 84.5346C29.684 84.2862 29.6966 84.0124 29.8083 83.7732L49.0831 42.4981C49.182 42.2864 49.3518 42.116 49.5632 42.0164L53.5037 40.1611L56.9323 32.5129L59.0957 31.26L57.8193 25.0656L61.4254 15.9279L61.5986 14.4734C61.6382 14.1414 61.5097 13.8104 61.2513 13.5983C55.9887 9.28022 49.5286 7.19655 46.6668 6.63378C46.5072 6.60241 46.3437 6.614 46.1888 6.6633L40.6676 8.42019L42.5982 10.8728C42.7622 11.0812 42.8368 11.3463 42.8054 11.6096L42.726 12.2765C42.6946 12.5398 42.7691 12.8049 42.9332 13.0133L43.4963 13.7287C43.5317 13.7736 43.5469 13.8311 43.5385 13.8876L43.4788 14.2879C43.1662 16.3851 42.2575 18.3482 40.861 19.9437C40.8209 19.9895 40.7609 20.0126 40.7004 20.0054L33.0592 19.0952C32.6382 19.0451 32.2313 19.2659 32.0439 19.6462L28.524 26.7893C28.4257 26.9888 28.3967 27.2153 28.4416 27.4331L29.2612 31.411C29.3056 31.6263 29.2778 31.8501 29.1822 32.048L8.79399 74.2262C8.68007 74.4619 8.47828 74.6435 8.23195 74.732L5.88571 75.5755C5.61505 75.6728 5.39939 75.8819 5.29381 76.1494Z" fill="#DDDDDD" />
            <path d="M78.2519 28.8607C75.6336 36.5383 68.9671 40.486 63.795 38.7222C58.623 36.9584 55.7577 29.7599 58.376 22.0824C60.9943 14.4048 67.6608 10.4571 72.8329 12.2209C78.0049 13.9848 80.8702 21.1832 78.2519 28.8607Z" stroke="#DDDDDD" stroke-width="3" />
            <path d="M37.929 69.4743L34.3278 70.1032L31.1949 75.269L40.7574 72.8737C41.606 72.6612 42.3196 72.0888 42.7112 71.3065L59.9347 36.8988L57.0506 31.5199L40.1316 67.7873C39.7171 68.6758 38.8947 69.3056 37.929 69.4743Z" fill="#DDDDDD" />
        </svg>
    </div></div>)

    if (typeof teams !== 'undefined') {
        return (
            <>

                <header className="App-header">
                    <Header teams={teams} bullets={bullets} />
                </header>

                <Outlet />
                <Footer teams={teams} links={footer_links} general={footer_general} contacts={contacts} disclaimer={disclaimer} />
            </>
        )
    } else {
        return (<div class="loader main error"><div class="spinner error"></div><div class="error-msg">500</div></div>)
    }
};

export default Layout;