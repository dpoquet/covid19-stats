class CardFactory {
    constructor(container, data, cards) {
        this.container = container;
        this.data = data;
        this.cards = cards;

        this._buildCards();
    }

    _buildCards() {
        this.cards.forEach(card => {
            const renderCard = card.build(this.data);
            this.container.append(renderCard);
        });
        
    }
}

export default CardFactory;
