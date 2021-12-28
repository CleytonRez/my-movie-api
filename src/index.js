import express from 'express'
import { createMovie, deleteMovie, readMovies, updateMovie } from './services/jsonServices';

const app = express()
app.use(express.json());
app.get('/', async (request, response) => {
    //createMovie({
    //    "name": "Uma Noite de Crime",
    //    "genero": "Terror"
    //})

    //updateMovie({
    //    "id": 1,
    //    "genero": "Suspense"
    //})

    //deleteMovie(1)
    response.json(await readMovies())


})
console.log('Vaca Preta')


app.listen(3001) 