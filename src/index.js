import express from 'express'
import movieController from './controllers/movieController';

const app = express();
app.use(express.json());

movieController(app)


app.listen(3000) 