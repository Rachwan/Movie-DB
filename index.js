const express = require('express');
const app = express();
const port = 2000;

app.get('/', (request, response) => {
    response.send('ok')
});

app.listen(port, () => console.log(`The server is lisining on port: ${port}`));

app.get('test', (request, response) => {
    response.json({status: 200, message: 'ok'})
})

app.get('time', (request, response) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes}`;
    response.json({status: 200,message: time})
})

app.get('hello/:ID', (request, response) => {
    const {ID} = request.params;
    response.json({status: 200, message: `Helloo ${ID}`})
})

app.get('serach', (request, response) => {
    const {search} = request.params;
    if(search) 
        response.json({status: 200, message: 'ok', data: search})
    else
        response.status(500).json({status: 500, error: true, message: `You did not provide a search! You need to provide one.`})
})