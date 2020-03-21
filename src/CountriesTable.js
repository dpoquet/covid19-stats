import Table from './Table.js';

class CountriesTable extends Table {
    constructor(cells, data) {
        super(cells, data);
    }

    _render() {
        this.data.forEach((country, index) => {
            let row = this.tableElement.insertRow(index);
            let countryName = row.insertCell(0);
            let cases = row.insertCell(1);
            let deaths = row.insertCell(2);
            let seriousCritical = row.insertCell(3);
            let recovered = row.insertCell(4);

            countryName.innerHTML = country.country_name;
            cases.innerHTML = country.cases;
            deaths.innerHTML = country.deaths;
            seriousCritical.innerHTML = country.serious_critical;
            recovered.innerHTML = country.total_recovered;
        });

        let tHead = this.tableElement.createTHead();
        let tHeadRow = tHead.insertRow();

        this.cells.forEach(cellValue => {
            let th = document.createElement('th');
            th.innerText = cellValue;
            tHeadRow.appendChild(th);
        });

        return this.tableElement;
    }
}

export default CountriesTable;