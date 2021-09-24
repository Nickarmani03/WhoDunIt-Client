import React, { useContext, useState, useEffect } from "react"
import { MovieContext } from "../movie/MovieProvider.js"
import { MovieNightContext } from "../movie_nights/MovieNightProvider.js"
import { MovieSuspectContext } from "./MovieSuspectProvider.js"
import { SuspectContext } from "../suspect/SuspectProvider.js"
import { useHistory } from "react-router-dom"
import "./MovieSuspect.css"


export const MovieSuspectForm = () => {
    // Use the required context providers for data

    const { getMovieSuspects, createMovieSuspect } = useContext(MovieSuspectContext)

    const { movies, getMovies } = useContext(MovieContext)

    const { movieNights, getMovieNights } = useContext(MovieNightContext)

    const { suspects, getSuspects } = useContext(SuspectContext)

    const history = useHistory()

    // Component state
    const [currentMovieSuspect, setMovieSuspect] = useState({

        suspectId: 0,
        movieId: 0,
        movieNightId: 0

    })

    // Get all existing movies from API
    useEffect(() => {
        getMovieSuspects()
            .then(getSuspects())
            .then(getMovies())
            .then(getMovieNights())
    }, [])



    const changeMovieSuspectState = (domEvent) => {
        const newMovieSuspectState = { ...currentMovieSuspect }
        newMovieSuspectState[domEvent.target.name] = domEvent.target.value
        setMovieSuspect(newMovieSuspectState)
    }

    return (
        <form className="MovieSuspectForm">
            <h2 className="MovieSuspectForm__title">Choose a New Movie Suspect</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of the Movie: </label>
                    <select type="select" name="movieId" required autoFocus className="form-control"
                        value={currentMovieSuspect.movieId}
                        onChange={changeMovieSuspectState}>
                        <option value="0">Select a movie...</option>
                        {movies.map((movie => {
                            return <option key={movie.id} value={movie.id}>
                                {movie.name}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="suspect">Choose a Character: </label>
                    <select type="select" name="suspectId" required autoFocus className="form-control"
                        value={currentMovieSuspect} onChange={changeMovieSuspectState}>
                        <option value="0">Select a Suspect</option>
                        {suspects.map((suspect => {
                            return <option key={suspect.id} value={suspect.id}>
                                {suspect.name}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">What is the Movie Night Event: </label>
                    <select type="select" name="movieNightId" required autoFocus className="form-control"
                        value={currentMovieSuspect} onChange={changeMovieSuspectState}>
                        <option value="0">Select a Movie Night</option>
                        {movieNights.map((movie_night => {
                            return <option key={movie_night.id} value={movie_night.id}>
                                {movie_night.title}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={eve => {
                    // Prevent form from being submitted
                    eve.preventDefault()

                    createMovieSuspect({
                        movieId: parseInt(currentMovieSuspect.movieId),
                        suspectId: parseInt(currentMovieSuspect.suspectId),
                        movieNightId: parseInt(currentMovieSuspect.movieNightId),
                    })

                        // Send POST request to your API
                        .then(() => history.push("/movie_suspect"))
                }}
                className="btn btn-1"> Create Movie Suspect </button>
        </form>
    )
}