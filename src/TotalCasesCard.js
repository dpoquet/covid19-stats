import Card from './Card.js';

class TotalCasesCard extends Card {
    constructor(data) {
        super(data);
    }

    _render() {
        this.cardElement.innerHTML = `
            <h3>Total cases</h3>
            <span>${parseFloat(this.data.total_cases)}</span>
            <span>+${this.data.new_cases} registered today</span>
        `;

        return this.cardElement;
    }
}

export default TotalCasesCard;
