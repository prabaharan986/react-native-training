let inputArray = [
    {text: 'ES6 is awesome', type: 'p'},
    {text: 'ES6 is significant update in JS history', type: 'li'},
    {text: 'const creates immutable variables', type: 'li'},
    {text: 'Block scoping via let and const', type: 'li'},
    {text: 'ES6 was released in 2015', type: 'h3'}
];

let outputArray = inputArray.filter((obj) => obj.type === 'li');


for(let ouputObj of outputArray) {
    let {text, type} = ouputObj;
    console.log(`Element type is ${type} with text ${text}`);
}