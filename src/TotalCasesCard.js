import Card from './Card.js';

class TotalCasesCard extends Card {
    constructor(data) {
        super(data);
    }

    render() {
        this.cardElement.innerHTML = `
            <h3 class="font-bold text-lg sm:text-xl mb-2">TOTAL CASES</h3>
            <span class="block text-5xl font-semibold mb-5">${this.data.total_cases}</span>
            <span class="block text-sm">+${this.data.new_cases} registered today</span>
        `;

        return this.cardElement;
    }
}

export default TotalCasesCard;
