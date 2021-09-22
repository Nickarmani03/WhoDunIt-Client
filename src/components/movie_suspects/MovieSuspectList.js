import React, { useContext, useEffect } from "react"
import { MovieSuspectContext } from "./MovieSuspectProvider.js"
import { useHistory } from "react-router-dom"


export const MovieSuspectList = () => {
    const history = useHistory()
    const { movieSuspects, getMovieSuspects } = useContext(MovieSuspectContext)
    

    useEffect(() => {
        getMovieSuspects()
    }, [])

    return (
        <article className="movie_suspects">
            <header className="movie_suspects__header">
                <h1>WhoDunIt Movie Suspects</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/movie_suspect/new" })
                    }}
                >Schedule New Movie Suspect</button>
            </header>
            {
                movieSuspects.map(movie_suspect => {
                    // const attending = profile.movieSuspects.some(evt => evt.id === movieSuspect.id)
                    return <section key={movie_suspect.suspect.name} className="registration">
                        <div className="registration__movie">{movie_suspect.movie_night.id}</div>
                        <div>{movie_suspect.description}</div>
                        <div className="registration__movie">{movie_suspect.movie.name}</div>
                        <div>Created by: {movie_suspect.creator.user.first_name} {movie_suspect.creator.user.last_name}</div>
                    </section>
                })
            }

        </article >
    )
}