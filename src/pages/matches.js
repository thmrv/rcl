import { useEffect, useState } from 'react';
import MatchCard from '../components/matchCard';
import fetchHelper from '../fetchHelper';

let matches;

let month = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];

function Matches() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
        fetchHelper('https://api.itsport.pro/games?take=50').then((data) => matches = data).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    if (typeof matches != 'undefined') {

        let weekData = prepareData(matches)

        return (<div class="matches-wrapper animate__animated animate__fadeIn">
            <div class="title_lg dark">Результаты матчей</div>
            <div class="matches-section-wrapper">
                {weekData.map((week, index) => (<div class="week-wrapper">
                    <div class="week-title-wrapper"><div class="week-title">{index} неделя</div><div class="hr"></div></div>
                    <div class="week-section-wrapper">
                        {week.map((match) => (
                            <MatchCard match={match} pending={false} />
                        ))}
                    </div>
                </div>
                ))}
            </div>
        </div>);
    }
};

function getDate(date) {
    let object = new Date(date);
    this.dateTime = [object.getHours() + ":" + (object.getMinutes() < 10 ? '0' : '') + object.getMinutes(), object.getDate() + ' ' + month[object.getMonth()]];
}

function prepareData(matches) {
    let resultingData = [];
    //console.log(matches.games)
    matches.games.forEach((match, index) => {
        let dateTime = new Date(match.startedAt);
        let date = dateTime.getDay();
        let month = dateTime.getMonth() !== 1 ? dateTime.getMonth() - 1 : dateTime.getMonth();
        let week;
        //console.log(month)
        switch (true) {
            case (date < 8):
                week = month * 4 + 1
                if (!(week in resultingData)) {
                    resultingData[week] = [];
                }
                resultingData[week].push(match)
                break;
            case (date >= 8 && date < 16):
                week = month * 4 + 2
                if (!(week in resultingData)) {
                    resultingData[week] = [];
                }
                resultingData[week].push(match)
                break;
            case (date >= 16 && date < 24):
                week = month * 4 + 3
                if (!(week in resultingData)) {
                    resultingData[week] = [];
                }
                resultingData[week].push(match)
                break;
            case (date >= 24 && date <= 31):
                week = month * 4 + 4
                if (!(week in resultingData)) {
                    resultingData[week] = [];
                }
                resultingData[week].push(match)
                break;
        }
    }
    )
    console.log(resultingData);
    return resultingData;
}

export default Matches;