import { getWorldwideStats, getStatsByCountries } from './endpoints.js';
import CardFactory from './CardFactory.js';

const lastUpdateBox = document.getElementsByClassName('js-last-update');


initWorldwideStats();
initCountryListStats();

async function initWorldwideStats() {
    let response = await getWorldwideStats();
    let worldwideData = await response.json();

    const lastUpdateDate = new Date(worldwideData.statistic_taken_at);
    lastUpdateBox[0].innerHTML = lastUpdateDate.toLocaleString();

    const cardFactory = new CardFactory('container', worldwideData, ['card1', 'card2', 'card3']);
}

async function initCountryListStats() {
    let response = await getStatsByCountries();
    let countriesList = await response.json();
    console.log(countriesList.countries_stat);
}