class Card {
    constructor(data) {
        this.data = data;
        this.cardElement = document.createElement('div');
        this.cardElement.classList.add('rounded', 'overflow-hidden', 'shadow-lg', 'border', 'border-gray-100', 'bg-white', 'p-6');
    }

    render() {}
}

export default Card;