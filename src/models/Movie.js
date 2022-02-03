class Movie {
    constructor(id, name, genero) {
        this._id = id;
        this._name = name;
        this._genero = genero
    }

    test = (value) => {
        console.log(`O Filme de ID: ${this._id}, se chama ${this._name} e possui o genero ${this._genero})`)

    }
}

const movie = new Movie(123, "A Espera de Um Milagre! ", "Drama")
movie.test()