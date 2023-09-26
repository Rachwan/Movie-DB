const express = require('express');
const app = express();
const port = 2000;

app.get('/', (request, response) => {
    response.send('ok')
});

app.listen(port, () => console.log(`The server is lisining on port: ${port}`));

app.get('test', (request, response) => {
    response.json({
        status: 200,
        message: 'ok',
    })
})

app.get('time', (request, response) => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes}`;
    response.json({
        status: 200,
        message: time,
    })
})
