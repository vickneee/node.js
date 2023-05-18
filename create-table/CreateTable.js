const fs = require('fs');
const mf = require('./MyFunctions');

const r = [
    { Nimi: 'Pekka', Ika: 46 },
    { Nimi: 'Tiina', Ika: 25 },
    { Nimi: 'Annika', Ika: 34 },
    { Nimi: 'Hannu', Ika: 57 }
];

const html = mf.CreateTable(r);

fs.writeFile('Table.html', html, (err) => {
    if (err) {
        console.error('Error writing HTML file:', err);
    } else {
        console.log('HTML file saved successfully.');
    }
});