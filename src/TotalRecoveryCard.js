import Card from './Card.js';

class TotalRecoveryCard extends Card {
    constructor(data) {
        super(data);
    }

    _render() {
        this.cardElement.innerHTML = `
            <h3>Total Recovered</h3>
            <span>${this.data.total_recovered}</span>
        `;

        return this.cardElement;
    }
}

export default TotalRecoveryCard;
