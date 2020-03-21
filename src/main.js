import { DAILY_ENDPOINT, COUNTRIES_LIST_ENDPOINT } from './constants.js';


// TODO: DOM Loaded

    // INIT WORLDWIDE STATS

        // FETCHING DAILY_ENDPOINT
        initWorldwideStats();
        initCountryListStats();


        // Instance BoxFactory

            // Pass TotalCasesCard
            // Pass ActiveCasesCard
            // RecoverDeathCasesCard




async function initWorldwideStats() {
    let response = await fetch(DAILY_ENDPOINT);
    let data = await response.json();
    console.log(data);
}

async function initCountryListStats() {
    let response = await fetch(COUNTRIES_LIST_ENDPOINT);
    let data = await response.json();
    console.log(data);
}
