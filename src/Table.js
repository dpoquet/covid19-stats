class Table {
    constructor(cells, data) {
        this.cells = cells;
        this.data = data;
        this.tableElement = document.createElement('table');
    }

    _render() {}
}

export default Table;