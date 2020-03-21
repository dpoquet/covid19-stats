class Card {
    constructor(data) {
        this.data = data;
        this.cardElement = document.createElement('div');
        this.cardElement.classList.add('rounded', 'overflow-hidden', 'shadow-lg', 'p-6');
    }

    _render() {}
}

export default Card;