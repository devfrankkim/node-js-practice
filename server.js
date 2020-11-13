const express =require('express');
const app = express();

console.log(__dirname)
app.use(express.static(__dirname + '/public'))

app.listen(9999)