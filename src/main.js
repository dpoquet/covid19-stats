import { getWorldwideStats, getStatsByCountries } from './endpoints.js';
import CardFactory from './CardFactory.js';
import TotalCasesCard from './TotalCasesCard.js';
import TotalRecoveryCard from './TotalRecoveryCard.js';
import TotalDeathsCard from './TotalDeathsCard.js';
import CountriesTable from './CountriesTable.js';

const lastUpdateBox = document.getElementsByClassName('js-last-update');
const worldwideContainer = document.getElementById('worldwide-container');
const countriesTableContainer = document.getElementById('countries-table-container');


initWorldwideStats();
initCountryListStats();

async function initWorldwideStats() {
    let response = await getWorldwideStats();
    let worldwideData = await response.json();

    const lastUpdateDate = new Date(worldwideData.statistic_taken_at);
    lastUpdateBox[0].innerHTML = lastUpdateDate.toLocaleString();

    new CardFactory(worldwideContainer, [
        new TotalCasesCard(worldwideData), 
        new TotalRecoveryCard(worldwideData), 
        new TotalDeathsCard(worldwideData)
    ]);
}

async function initCountryListStats() {
    let response = await getStatsByCountries();
    let countriesList = await response.json();

    // Sort by cases
    countriesList.countries_stat.sort((countryA, countryB) => parseFloat(countryA.cases.replace(/,/g, '')) < parseFloat(countryB.cases.replace(/,/g, '')) ? 1 : -1);

    const countriesTableInstance = new CountriesTable(countriesList.countries_stat);
    countriesTableContainer.append(countriesTableInstance.render());
}