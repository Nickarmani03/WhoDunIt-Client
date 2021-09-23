import React, { useContext, useState, useEffect } from "react"
import { MovieContext } from "../movie/MovieProvider.js"
import { MovieNightContext } from "./MovieNightProvider.js"
import { useHistory } from "react-router-dom"
import "./MovieNight.css"


export const MovieNightForm = () => {
    // Use the required context providers for data

    const { getMovieNights, createMovieNight } = useContext(MovieNightContext)

    const { movies, getMovies } = useContext(MovieContext)

    const history = useHistory()

    // Component state
    const [currentMovieNight, setMovieNight] = useState({

        creator: localStorage.getItem("whodunit_token"),
        movie: "",
        date: "",
        time: "",
        description: "",
        title: "",
        attendees: []
    })

    // Get all existing movies from API
    useEffect(() => {
        getMovies()
    }, [])

    // Get all existing movieNights from API
    useEffect(() => {
        getMovieNights()
    }, [])

    const changeMovieNightState = (domEvent) => {
        const newMovieNightState = { ...currentMovieNight }
        newMovieNightState[domEvent.target.name] = domEvent.target.value
        setMovieNight(newMovieNightState)
    }

    return (
        <form className="MovieNightForm">
            <h2 className="MovieNightForm__title">Schedule New Movie Night</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="creator">Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentMovieNight.title}
                        onChange={changeMovieNightState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="movieId">Movie: </label>
                    <select name="movie" className="form-control"
                        value={currentMovieNight.movie}
                        onChange={changeMovieNightState}>
                        <option value="0">Select a movie...</option>
                        {movies.map((e => {
                            return <option key={e.id} value={e.id}>{e.name}</option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentMovieNight.description}
                        onChange={changeMovieNightState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="date">Date: </label>
                    <input type="date" name="date" required autoFocus className="form-control"
                        value={currentMovieNight.date}
                        onChange={changeMovieNightState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="time">Time: </label>
                    <input type="time" name="time" required autoFocus className="form-control"
                        value={currentMovieNight.time}
                        onChange={changeMovieNightState}
                    />
                </div>
            </fieldset>

            <button type="submit"
                onClick={eve => {
                    // Prevent form from being submitted
                    eve.preventDefault()

                    const movieNight = {
                        movie: currentMovieNight.movie,
                        date: currentMovieNight.date,
                        time: currentMovieNight.time,
                        description: currentMovieNight.description,
                        title: currentMovieNight.title,
                    }

                    // Send POST request to your API
                    createMovieNight(movieNight)
                        .then(() => history.push("/movie_night"))
                }}
                className="btn btn-1"> Create Movie Night </button>
        </form>
    )
}