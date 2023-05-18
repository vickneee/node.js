var mf = require('./MyFunctions');
r = [{Nimi:'Pekka', Ika:46}, {Nimi:'Tiina', Ika:25}, {Nimi:'Annika', Ika:34}, {Nimi:'Hannu', Ika:57}]
var html = mf.CreateTable(r)
console.log(html)
process.exit(0)
