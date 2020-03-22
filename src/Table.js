class Table {
    constructor(data) {
        this.data = data;
        this.tableElement = document.createElement('table');
        this.tableElement.classList.add('text-left', 'w-full');
    }

    render() {}
}

export default Table;