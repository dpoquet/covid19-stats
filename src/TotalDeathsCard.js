import Card from './Card.js';

class TotalDeathsCard extends Card {
    constructor(data) {
        super(data);
    }

    _render() {
        this.cardElement.innerHTML = `
            <h3>Total Deaths</h3>
            <span>${this.data.total_deaths}</span>
            <span>${this.data.new_deaths} registered today</span>
        `;

        return this.cardElement;
    }
}

export default TotalDeathsCard;
