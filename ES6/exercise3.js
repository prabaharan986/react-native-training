let data = [
    {title: 'apple', price: 2, qty: 30},
    {title: 'banana', price: 1, qty: 30},
    {title: 'chikoo', price: 1, qty: 30}
];

let title = 'Fruits';

class TableGenerator {
    constructor(){
        this.data = data;
        this.title = title;
    }
}

TableGenerator(data, title);