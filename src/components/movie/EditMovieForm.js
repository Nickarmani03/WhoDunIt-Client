import React, { useContext, useState, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory, useParams } from 'react-router'
import "./Movie.css"

export const EditMovieForm = () => {
    // Use the required context providers for data

    const { getGenres, genres, editMovie, getMovieById, getSuspects, suspects } = useContext(MovieContext)


    const history = useHistory()

    const { movieId } = useParams();

    // Component state
    const [currentMovie, setCurrentMovie] = useState({

        name: "",
        year: "",
        description: "",
        genreId: 0,        
        numberOfPlayers: 0,
        director: "",
        rating: "",
        movieImageUrl: "",
        suspectId: 0

    })

    useEffect(() => {
        getGenres() .then(getSuspects())
    }, [])

    useEffect(() => {
        if (movieId) {
            getMovieById(movieId).then((movie) => {
                setCurrentMovie({
                    id: parseInt(movieId),
                    name: movie.name,
                    year: movie.year,
                    description: movie.description,
                    genreId: movie.genre.id,
                    numberOfPlayers: movie.number_of_players,
                    director: movie.director,
                    rating: movie.rating,
                    movieImageUrl: movie.movie_image_url,
                    suspectId: movie.suspect.id,
                    
                })
            })
        }
    }, [movieId])


    const changeMovieState = (event) => {
        const newMovieState = { ...currentMovie }// Create copy
        newMovieState[event.target.name] = event.target.value// Modify copy
        setCurrentMovie(newMovieState)// Set copy as new Movie state
    }

    return (
        <form className="movieForm">
            <h2 className="movieForm__title"> New Movie</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Title of the Movie: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Name of the Movie"
                        value={currentMovie.name}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="year">Movie Year: </label>
                    <input type="text" name="year" required autoFocus className="form-control"
                        placeholder="Year the movie debuted"
                        value={currentMovie.year}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        placeholder="Describe the Movie"
                        value={currentMovie.description}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="genre">Type of Movie: </label>
                    <select type="select" name="genreId" required autoFocus className="form-control"
                        value={currentMovie.genreId} onChange={changeMovieState}>
                        <option value="0">Select a Genre</option>
                        {genres.map((genre => {
                            return <option key={genre.id} value={genre.id}>
                                {genre.label}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="numberOfPlayers">Number of Players: </label>
                    <input type="text" name="numberOfPlayers" required autoFocus className="form-control"
                        placeholder="How Many Will Be Playing?"
                        value={currentMovie.numberOfPlayers}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="director">Movie Director: </label>
                    <input type="text" name="director" required autoFocus className="form-control"
                        placeholder="Director of the Movie"
                        value={currentMovie.director}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Movie Rating: </label>
                    <input type="text" name="rating" required autoFocus className="form-control"
                        placeholder="Whats the Movie Rating?"
                        value={currentMovie.rating}
                        onChange={changeMovieState}
                    />
                </div>
            </fieldset>

            

            <fieldset>
                <div className="form-group">
                    <label htmlFor="suspect">Suspect: </label>
                    <select type="select" name="suspectId" required autoFocus className="form-control"
                        value={currentMovie.suspectId} onChange={changeMovieState}>
                        <option value="0">Select a Suspect</option>
                        {suspects.map((suspect => {
                            return <option key={suspect.id} value={suspect.id}>
                                {suspect.name}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <button
                type="submit"
                onClick={(evt) => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    editMovie({

                        id: currentMovie.id,
                        name: currentMovie.name,
                        year: currentMovie.year,
                        description: currentMovie.description,
                        genreId: parseInt(currentMovie.genreId),
                        numberOfPlayers: currentMovie.numberOfPlayers,
                        director: currentMovie.director,
                        rating: currentMovie.rating,
                        movieImageUrl: currentMovie.movieImageUrl,
                        suspectId: parseInt(currentMovie.suspectId)
                    })
                        // Send POST request to your API

                        .then(() => history.push("/movie"));
                }}
                className="btn btn-1"> Edit </button>
        </form>
    )
}


// const clearForm = () => { 
//     document.getElementById("categoryForm").reset();
//   }

