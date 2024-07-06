const express = require ('express');
const fs = require ('fs');
const app = express();
const port = 3000;

app.use(express.json());

const readData = () => {
    const data = fs.readFileSync('data.json');
    return JSON.parse(data);

}

app.ge
t('/data',(req,res) => {
    const data = readData();
    res.json(data);
});

app.listen(port,function(){
    console.log('my server is running on http://localhost:3000')
});