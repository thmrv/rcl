import { useEffect, useState, useReducer } from 'react';
import MatchCard from '../components/matchCard';
import fetchHelper from '../fetchHelper';
import Button from '../components/button';

let matches;
let step = 25,
    skip = 0;

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function Pending() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const loadMore = () => {
        step += 25;
        //skip += 25;
        setData(false)
        setLoading(true)
        fetchHelper(window.apiHost + 'pending').then((data) => matches = data).finally(() => {
            setData(true)
            setLoading(false)
            forceUpdate();
        })
    }

    const reload = () => {
        return window.location.reload();
    }

    useEffect(() => {
        setLoading(true)
        fetchHelper(window.apiHost + 'pending').then((data) => matches = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof matches != 'undefined') {

        if (typeof matches != 'undefined') {
            if (matches.length === 0) {
                return (<div class="animate__animated animate__fade no-results" onClick={reload}>Результатов нет <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                    <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg></div>)
            }
            return (<div class="matches-wrapper pending-matches-wrapper animate__animated animate__fadeIn">
                <div class="title_lg dark">Предстоящие матчи</div>
                <div class="matches-section-wrapper-pending">
                    {matches.map((match, index) => (
                        <MatchCard match={match} pending={true} />
                    ))}
                </div>
            </div>);
        }
    }
};

function getDate(date) {
    let object = new Date(date);
    this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
}

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

function prepareData(matches) {
    let resultingData = [];
    matches.games.forEach((match, index) => {
        let dateTime = new Date(match.startedAt);
        let week;
        week = dateTime.getWeek() + 1;
        console.log(week)
        if (typeof resultingData[week] == 'undefined') {
            resultingData[week] = [];
        }
        resultingData[week].push(match);
    })
    console.log(resultingData);
    return resultingData;
}

export default Pending;