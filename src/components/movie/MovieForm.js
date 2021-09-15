import React, { useContext, useState, useEffect } from "react"
import { MovieContext } from "./MovieProvider"
import { useHistory } from 'react-router'

export const MovieForm = () => {
    // Use the required context providers for data

    const { createMovie, getGenres, genres } = useContext(MovieContext)

    // const { getSuspects, suspects } = useContext(MovieContext)

    const history = useHistory()

    // Component state
    const [currentMovie, setMovie] = useState({

        name: "",
        year: "",
        description: "",
        genreId: 0,
        player: localStorage.getItem("whodunit_token"),
        numberOfPlayers: 0,
        director: "",
        rating: "",
        suspectId: 0
    })

    useEffect(() => {
        getGenres()
    }, [])

    const changeMovieState = (event) => {
        const newMovie = { ...currentMovie }// Create copy
        newMovie[event.target.name] = event.target.value// Modify copy
        setMovie(newMovie)// Set copy as new Movie state
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
                    <label htmlFor="title">Movie Year: </label>
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
                    <label htmlFor="title">Type of Movie: </label>
                    <select  type="select" name="genreId" required autoFocus className="form-control" 
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
                    <label htmlFor="title">Movie Director: </label>
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
                    <input type="text" name="suspect" required autoFocus className="form-control"
                        placeholder="Name of the Suspect"
                        value={currentGame.suspect}
                        onChange={changeGameState}
                    />
                </div>
            </fieldset>
            
            <button type="submit"
                onClick={(evt) => {
                    // Prevents form from being submitted
                    evt.preventDefault()

                    createMovie({//whats being passed to the back end
                        name: currentMovie.name,
                        year: currentMovie.year,
                        description: currentMovie.description,
                        genreId: parseInt(currentMovie.genreId),
                        numberOfPlayers: parseInt(currentMovie.numberOfPlayers),
                        director: currentMovie.director,
                        rating: currentMovie.rating,
                        suspectId: parseInt(currentMovie.suspectId)
                    })
                    // Send POST request to your API
                    
                    .then(() => history.push("/movies"))
                }}
                className="btn btn-1"> Create Movie </button>
        </form>
    )
}