import React, { useContext, useEffect } from "react"
import { MovieNightContext } from "./MovieNightProvider.js"
import { useHistory } from "react-router-dom"
import "./MovieNight.css"

export const MovieNightList = () => {
    const history = useHistory()
    const { movieNights, getMovieNights } = useContext(MovieNightContext)
    const { leaveMovieNight, joinMovieNight } = useContext(MovieNightContext)

    useEffect(() => {
        getMovieNights()
    }, [])

    return (
        <article className="movie_nights">
            <header className="movie_nights__header">
                <h1>WhoDunIt Movie Nights</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/movie_night/new" })
                    }}
                >Schedule New Movie Night</button>
            </header>
            {
                movieNights.map(movie_night => {
                    // const attending = profile.movieNights.some(evt => evt.id === movieNight.id)
                    return <section key={movie_night.id} className="registration">
                        <div className="registration__movie">{movie_night.movie.title}</div>
                        <div>{movie_night.description}</div>
                        <div className="registration__movie">{movie_night.movie.name}</div>
                        {/* <div>{movie_night.description}</div> */}
                        <div> Please join our Movie Night, {
                            new Date(movie_night.date).toLocaleDateString("en-US",
                                {
                                    weekday: 'long',
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })
                        } @ {movie_night.time}
                        </div>
                        {
                            movie_night.joined
                                ? <button className="btn btn-3"
                                    onClick={() => leaveMovieNight(movie_night.id)}
                                >Leave</button>
                                : <button className="btn btn-2"
                                    onClick={() => joinMovieNight(movie_night.id)}
                                >Join</button>
                        }
                    </section>
                })
            }
        </article >
    )
}