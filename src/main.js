import { getWorldwideStats, getStatsByCountries } from './endpoints.js';
import CardFactory from './CardFactory.js';
import TotalCasesCard from './TotalCasesCard.js';
import TotalRecoveryCard from './TotalRecoveryCard.js';
import TotalDeathsCard from './TotalDeathsCard.js';

const lastUpdateBox = document.getElementsByClassName('js-last-update');


initWorldwideStats();
initCountryListStats();

async function initWorldwideStats() {
    let response = await getWorldwideStats();
    let worldwideData = await response.json();

    const lastUpdateDate = new Date(worldwideData.statistic_taken_at);
    lastUpdateBox[0].innerHTML = lastUpdateDate.toLocaleString();

    new CardFactory(document.getElementById('worldwide-container'), [
        new TotalCasesCard(worldwideData), 
        new TotalRecoveryCard(worldwideData), 
        new TotalDeathsCard(worldwideData)
    ]);
}

async function initCountryListStats() {
    let response = await getStatsByCountries();
    let countriesList = await response.json();
    console.log(countriesList.countries_stat);
}