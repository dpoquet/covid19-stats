import Card from './Card.js';

class TotalRecoveryCard extends Card {
    constructor(data) {
        super(data);
    }

    render() {
        this.cardElement.innerHTML = `
            <h3 class="font-bold text-lg sm:text-xl mb-2">TOTAL RECOVERED</h3>
            <span class="block text-5xl font-semibold mb-5 text-green-500">${this.data.total_recovered}</span>
        `;

        return this.cardElement;
    }
}

export default TotalRecoveryCard;
