class Table {
    constructor(data) {
        this.data = data;
        this.tableElement = document.createElement('table');
        this.tableElement.classList.add('text-left', 'w-full');
        this.tableElement.style.minWidth = '750px';
    }

    render() {}
}

export default Table;