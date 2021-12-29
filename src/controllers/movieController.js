import { createMovie, deleteMovie, readMovies, updateMovie } from "../services/jsonServices";

export default (app) => {

    if (app) {

        app.get('/movies', async (request, response) => {
            const movies = await readMovies()
            const data = {
                response: movies

            }

            response.json(data)
        })

        app.post('/movies', async (request, response) => {
            const body = request.body

            const idCreateMovie = await createMovie(body)

            response.status(201).json({
                response: idCreateMovie
            })
        })

        app.put('/movies/:id', async (request, response) => {
            const body = request.body;
            const id = request.params.id;
            body.id = Number(id)
            console.log("BODY: ", body, id)

            const idUpdateMovie = await updateMovie(body);

            response.status(201).json({
                response: idUpdateMovie
            })
        })

        app.delete('/movies/:id', async (request, response) => {
            const id = Number(request.params.id);
            console.log(id)

            const idDeleteMovie = await deleteMovie(id);

            response.status(201).json(
                {
                    response: idDeleteMovie
                }
            )
        })

    }

}
