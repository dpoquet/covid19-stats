import Card from './Card.js';

class TotalDeathsCard extends Card {
    constructor(data) {
        super(data);
    }

    render() {
        this.cardElement.innerHTML = `
            <h3 class="font-bold text-lg sm:text-xl mb-2">TOTAL DEATHS</h3>
            <span class="block text-5xl font-semibold mb-5 text-red-600">${this.data.total_deaths}</span>
            <span class="block text-sm">+${this.data.new_deaths} registered today</span>
        `;

        return this.cardElement;
    }
}

export default TotalDeathsCard;
