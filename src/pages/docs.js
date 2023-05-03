import { useEffect, useState, useReducer } from 'react';
import file_size_url from 'file_size_url';

let docs = [];

function Docs() {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let currentYear = new Date().getFullYear();

    useEffect(() => {
        setLoading(true)
        Promise.all([
            file_size_url("https://ruscyberleague.ru/static/Reglament_Sorevnovaniya_RCL_2023.pdf")
                .then((size) => { docs[0] = size }),
            file_size_url("https://ruscyberleague.ru/static/Disciplinarniy_reglament_RCL_2023.pdf")
                .then((size) => { docs[1] = size }),
            file_size_url("https://ruscyberleague.ru/static/Polojenie_o_disciplinarnom_komitete_RCL_2023.pdf")
                .then((size) => { docs[2] = size }),
            file_size_url("https://ruscyberleague.ru/static/Polohenie_o_prizovom_fonde_RCL_2023.pdf")
                .then((size) => { docs[3] = size }),
            file_size_url("https://ruscyberleague.ru/static/IESF_Statutes_2021.pdf")
                .then((size) => { docs[4] = size }),
            file_size_url("https://ruscyberleague.ru/static/CSGO_Rulebook.pdf")
                .then((size) => { docs[5] = size }),
        ]).finally(() => {
            setData(true)
            setLoading(false)
        })
    }, [setData]);
    console.log(docs);

    if (loading) return (<div class="loader"><div class="spinner"></div></div>)

    //if (docs.length !== 0) {
        return (<div class="docs news-page-wrapper animate__animated animate__fadeIn">
            <div class="title_lg">Документы</div>
            <div class="caption-md">Сезон 2022 – 2023</div>
            <div class="docs-wrapper">
                <a href="https://ruscyberleague.ru/docs/Reglament_Sorevnovaniya_RCL_2023.pdf" class="title_md">Регламент совернования РКЛ Сезон 2023</a>
                <div class="caption-sm">3239 Кб</div>
                <a href="https://ruscyberleague.ru/docs/Disciplinarniy_reglament_RCL_2023.pdf" class="title_md">Дисциплинарный регламент РКЛ Сезон 2023</a>
                <div class="caption-sm">650 Кб</div>
                <a href="https://ruscyberleague.ru/docs/Polojenie_o_disciplinarnom_komitete_RCL_2023.pdf" class="title_md">Положение о дисциплинарном комитете РКЛ Сезон 2023</a>
                <div class="caption-sm">179 Кб</div>
                <a href="https://ruscyberleague.ru/docs/Polohenie_o_prizovom_fonde_RCL_2023.pdf" class="title_md">Положение о призовом фонде РКЛ Сезон 2023</a>
                <div class="caption-sm">2048 Кб</div>
                <a href="https://ruscyberleague.ru/docs/IESF_Statutes_2021.pdf" class="title_md">IESF Statutes 2021</a>
                <div class="caption-sm">726 Кб</div>
                <a href="https://ruscyberleague.ru/docs/CSGO_Rulebook.pdf" class="title_md">CSGO Rulebook</a>
                <div class="caption-sm">5801 Кб</div>
            </div>
        </div>)
    //}
};

export default Docs;