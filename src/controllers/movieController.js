import { readMovies } from "../services/jsonServices";

export default (app) => {

    if (app) {

        app.get('/movie', async (request, response) => {
            const movies = await readMovies()
            const data = {
                response: movies

            }

            response.json(data)
        })
    }

}

