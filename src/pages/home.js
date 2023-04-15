import Masthead from '../components/masthead.js';
import { useEffect, useState } from 'react';
import PendingMatches from '../components/pendingMatches.js';
import Hero from '../components/hero.js';
import Articles from '../components/articles.js';

let featured, news, pending, ladder;

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        Promise.all([
            fetch('https://api.itsport.pro/pending')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { featured = actualData.at(-1) })
                .catch((err) => {
                    console.log(err.message);
                }),
            fetch('https://api.itsport.pro/news?take=6&skip=0')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { news = actualData })
                .catch((err) => {
                    console.log(err.message);
                }),
            fetch('https://api.itsport.pro/pending')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { pending = actualData })
                .catch((err) => {
                    console.log(err.message);
                }),
            fetch('https://api.itsport.pro/shortresults?skip=0&take=4')
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(
                            `This is an HTTP error: The status is ${response.status}`
                        );
                    }
                    return response.json();
                })
                .then((actualData) => { ladder = actualData })
                .catch((err) => {
                    console.log(err.message);
                })
        ]).finally(() => {
            setData(true)
        })
    }, [setData]);

    if (typeof featured != 'undefined' && typeof news != 'undefined' && typeof pending != 'undefined' && typeof ladder != 'undefined') {
        console.log(featured);
        return (<>
            <Masthead featured={featured} />
            <PendingMatches pending={pending} />
            <Hero ladder={ladder} />
            <Articles news={news} />
        </>);
    }
};

export default Home;