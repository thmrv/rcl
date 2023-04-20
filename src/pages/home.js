import Masthead from '../components/masthead.js';
import { useEffect, useState, useRef } from 'react';
import PendingMatches from '../components/pendingMatches.js';
import Hero from '../components/hero.js';
import Articles from '../components/articles.js';
import fetchHelper from '../fetchHelper.js';
import Scroller from '../components/scroller.js';
import PendingMatchesFooter from '../components/pendingMatchesFooter.js';

let featured, news, pending, ladder, matches, pendingFooter;
let mastheadStatic = false;

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetchHelper(window.apiHost + 'pending').then((data) => featured = data.at(-1)),
            fetchHelper(window.apiHost + 'news?take=6&skip=0').then((data) => news = data),
            fetchHelper(window.apiHost + 'pending').then((data) => pending = data),
            fetchHelper(window.apiHost + 'pending?take=3').then((data) => pendingFooter = data),
            fetchHelper(window.apiHost + 'shortresults?skip=0&take=4').then((data) => ladder = data),
            fetchHelper(window.apiHost + 'games?skip=0&take=3').then((data) => matches = data)
        ]).finally(() => {
            if (typeof featured == 'undefined') {
                fetchHelper(window.apiHost + 'games?take=1').then((data) => featured = data).finally(() => {
                    mastheadStatic = true;
                    setData(true)
                    setLoading(false)
                })
            } else {
                setData(true)
                setLoading(false)
            }
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof featured != 'undefined' && typeof news != 'undefined' && typeof pending != 'undefined' && typeof ladder != 'undefined') {
        return (<>
            <Masthead featured={mastheadStatic ? featured.games[0] : featured} static={mastheadStatic} />
            <Scroller pending={pending} matches={matches} />
            <Hero ladder={ladder} />
            <Articles news={news} />
            <PendingMatchesFooter pending={pendingFooter} />
        </>);
    }
};

export default Home;