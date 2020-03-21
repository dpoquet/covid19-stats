import { RAPIDAPI_HOST, RAPIDAPI_KEY, WORLDSTATS_ENDPOINT, COUNTRIES_LIST_ENDPOINT } from './constants.js';


export function getWorldwideStats() {
    return fetch(`${WORLDSTATS_ENDPOINT}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${RAPIDAPI_HOST}`,
            "x-rapidapi-key": `${RAPIDAPI_KEY}`
        }
    });
}

export function getStatsByCountries() {
    return fetch(`${COUNTRIES_LIST_ENDPOINT}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": `${RAPIDAPI_HOST}`,
            "x-rapidapi-key": `${RAPIDAPI_KEY}`
        }
    });
}
