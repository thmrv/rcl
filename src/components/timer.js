import React from "react";

export default class Timer extends React.Component {
    render() {
        let self = this;
        setTimeout(function () { self.updateTimer() }, 1000)
        return <div class="vs-timer-wrapper">
            <div class="days-wrapper">
                <div class="cap">Дней</div>
                <div class="days"></div>
            </div>
            <div class="hours-wrapper">
                <div class="cap">Часов</div>
                <div class="hours"></div>
            </div>
            <div class="minutes-wrapper">
                <div class="cap">Минут</div>
                <div class="minutes"></div>
            </div>
            <div class="seconds-wrapper">
                <div class="cap">Секунд</div>
                <div class="seconds"></div>
            </div>
        </div>
    }

    timer() {
        var t1 = this.props.date;
        var t2 = new Date();
        var dif = t1.getTime() - t2.getTime();

        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

        var seconds = parseInt(Seconds_Between_Dates, 10);

        var days = Math.floor(seconds / (3600 * 24));
        seconds -= days * 3600 * 24;
        var hrs = Math.floor(seconds / 3600);
        seconds -= hrs * 3600;
        var mnts = Math.floor(seconds / 60);
        seconds -= mnts * 60;

        return { 'days': days, 'hours': hrs, 'minutes': mnts, 'seconds': seconds };
    }

    updateTimer() {
        let timerObject = this.timer();
        document.querySelector('.days').innerHTML = timerObject.days;
        document.querySelector('.hours').innerHTML = timerObject.hours;
        document.querySelector('.minutes').innerHTML = timerObject.minutes;
        document.querySelector('.seconds').innerHTML = timerObject.seconds;
        this.forceUpdate();
        return true;
    }
}