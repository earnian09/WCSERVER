// Name: Earn Christian S. Laxamana
// Section: WD-201
const express = require('express');
const app = express();
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
}
];

app.get('/', (req, res) => {
    res.send('My New App!');
});


app.get('/api/movies', (req, res) => {
    res.send(movies);
}); 

app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h.id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('Movie not listed');
    res.send(movie);
});

app.use(express.json());

app.post('/api/movies', (req, res) => {
    const movie = {
        id: movies.length + 1,
        title: req.body.title
    }
    movies.push(movie);
    res.send(movie);
});


app.listen(3000, () => console.log('Listening on port 3000'));