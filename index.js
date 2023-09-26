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

// create
app.post('movies/create', (request, response) => {
    response.send('Create movie route')
})

// read
app.get('movies/read', (request, response) => {
    response.json({status: 200, data: movies})
})

// update
app.put('movies/update', (request, response) => {
    response.send('Update movie route')
})

// delete
app.delete('movies/delete', (request, response) => {
    response.send('Delete movie route')
})

const movies = [ 
    { title: 'Jaws', year: 1975, rating: 8 }, 
    { title: 'Avatar', year: 2009, rating: 7.8 }, 
    { title: 'Brazil', year: 1985, rating: 8 }, 
    { title: 'الإرهاب والكباب', year: 1992, rating: 6.2 } 
];

// ordered or sorted by date
app.get('movies/read/by-date', (request, response) => {
    const moviesDates = movies.slice().sort((a, b) => a.year - b.year);
    response.json({status: 200, data: moviesDates});
})

// ordered or sorted by rating
app.get('movies/read/by-rating', (request, response) => {
    const moviesRatings = movies.slice().sort((a, b) => a.rating - b.rating);
    response.json({status: 200, data: moviesRatings});
})

// ordered or sorted by title
app.get('movies/read/by-title', (request, response) => {
    const moviesTitles = movies.slice().sort((a, b) => {
        if(a.title < b.title) 
            return -1;
        else if (a.title > b.title) 
            return 1;
        else 
            return 0;
    })
    response.json({status: 200, data: moviesTitles})
})

// 

