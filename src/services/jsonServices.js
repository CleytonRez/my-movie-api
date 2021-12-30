import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile)
const writeFile = util.promisify(fs.writeFile)
const path = './src/models/movies.json'


export const readMovies = async () => {
    try {
        const file = await readFile(path, 'utf8')

        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON: ", parseJSON)

        return parseJSON.data;
    } catch (e) {
        console.log(e.message)
    }

}
export const createMovie = async (movieCreate) => {
    try {
        const file = await readFile(path, 'utf8')

        // Passa de OBJ em JS
        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON: ", parseJSON)

        movieCreate.id = Math.floor(Math.random() * 100)

        console.log("PARSEJSON.DATA: ", parseJSON.data)
        parseJSON.data.push(movieCreate)

        // Passa de OBJ para String
        const stringfiedJSON = JSON.stringify(parseJSON)
        await writeFile(path, stringfiedJSON)

        console.log("STRINGFIEDJSON: ", stringfiedJSON)

    } catch (e) {
        console.log(e.message)
    }
    return movieCreate.id;
}

export const updateMovie = async (movieUpdate) => {
    try {
        const file = await readFile(path, 'utf8')

        // Passa de OBJ em JS
        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON: ", parseJSON)

        const newListMovie = parseJSON.data.map((movie) => {
            if (movie.id === movieUpdate.id) {
                return Object.assign({}, movie, movieUpdate)
            }
            return movie
        })

        console.log("NEWLISTMOVIE: ", newListMovie)

        // Passa de OBJ para String
        const stringfiedJSON = JSON.stringify({
            data: newListMovie
        })
        await writeFile(path, stringfiedJSON)


        console.log("STRINGFIEDJSON: ", stringfiedJSON)

    } catch (e) {
        console.log(e.message)
    }
    return movieUpdate.id
}

export const deleteMovie = async (id) => {
    try {
        const file = await readFile(path, 'utf8')

        // Passa de OBJ em JS
        const parseJSON = JSON.parse(file)
        console.log("PARSEJSON: ", parseJSON)

        const newListMovie = []

        parseJSON.data.forEach((movie) => {
            if (movie.id !== id) {
                newListMovie.push(movie)
            }
        })

        // Passa de OBJ para String
        const stringfiedJSON = JSON.stringify({
            data: newListMovie
        })
        await writeFile(path, stringfiedJSON)

        console.log("STRINGFIEDJSONDELETE: ", stringfiedJSON)


    } catch (e) {
        console.log(e.message)
    }
}