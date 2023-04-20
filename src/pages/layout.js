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
            if (typeof teams === 'undefined'){
                setError(true)
            }
            if (!setError()){
                setData(true)
                setLoading(false)
            }
        })
    }, [setData]);

    if (loading) return (<div class="loader main"><div class="spinner"></div></div>)

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
    }else{
        return (<div class="loader main error"><div class="spinner error"></div><div class="error-msg">500</div></div>)
    }
};

export default Layout;