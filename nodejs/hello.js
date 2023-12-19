const fs = require('fs');
// fs.copyFileSync('file1.txt','file2.txt');
var superheroes = require('superheroes');
var villians = require('supervillians');
var superhero_name = superheroes.random();
var supervillian_name = supervillians.random();
console.log(superhero_name);
console.log(supervillian_name);
