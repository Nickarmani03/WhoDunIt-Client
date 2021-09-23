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
                >Choose a Suspect Below</button>
            </header>
            {
                movieSuspects.map(movie_suspect => {

                    return <section key={movie_suspect.suspect.name} className="registration">
                        <div className="registration__movie">{movie_suspect.movie_night.title}</div>
                        <div>I think  {movie_suspect.suspect.name} is totally the criminal.</div>
                        <div className="registration__movie">Am I correct?   {movie_suspect.suspect.guilty.label}</div>
                        <div>Chosen by: {movie_suspect.player.user.username} </div>
                    </section>
                })
            }

        </article >
    )
}
