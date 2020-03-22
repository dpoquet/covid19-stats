class CardFactory {
    constructor(elementContainer, cards) {
        this.container = elementContainer;
        this.cards = cards;

        this._buildCards();
    }

    _buildCards() {
        this.cards.forEach(card => {
            const renderCard = card.render();
            this.container.append(renderCard);
        });
    }
}

export default CardFactory;
