import Table from './Table.js';

class CountriesTable extends Table {
    constructor(data) {
        super(data);

        this.cells = ['Country', 'Total cases', 'Active', 'Recovered', 'Deaths', 'New cases'];
        this.tableElement.style.minWidth = '750px';
    }

    render() {
        this.data.forEach((country, index) => {
            let row = this.tableElement.insertRow(index);
            let countryName = row.insertCell(0);
            let cases = row.insertCell(1);
            let active = row.insertCell(2);
            let recovered = row.insertCell(3);
            let deaths = row.insertCell(4);
            let newCases = row.insertCell(5);

            countryName.innerHTML = country.country_name;
            countryName.classList.add('w-1/6');

            cases.innerHTML = country.cases;
            cases.classList.add('w-1/6');

            active.innerHTML = country.active_cases;
            active.classList.add('w-1/6');

            recovered.innerHTML = country.total_recovered;
            recovered.classList.add('w-1/6', 'text-green-500');

            deaths.innerHTML = country.deaths;
            deaths.classList.add('w-1/6', 'text-red-500');

            newCases.innerHTML = country.new_cases;
            newCases.classList.add('w-1/6');

            row.classList.add('flex', 'items-center', 'w-full', 'border-b', 'border-gray-200');
        });

        let tBody = this.tableElement.getElementsByTagName('tbody')[0];
        tBody.classList.add('flex', 'flex-col', 'items-center', 'justify-between', 'overflow-y-scroll', 'w-full');

        let tHead = this.tableElement.createTHead();
        let tHeadRow = tHead.insertRow();

        tHead.classList.add('flex', 'w-full', 'h-12', 'border-b', 'border-gray-200');
        tHeadRow.classList.add('flex', 'w-full');

        this.cells.forEach(cellValue => {
            let th = document.createElement('th');
            th.innerText = cellValue;
            th.classList.add('w-1/6');
            tHeadRow.appendChild(th);
        });

        return this.tableElement;
    }
}

export default CountriesTable;