import React, { useContext, useEffect } from "react"
import { MovieContext } from "./MovieProvider.js"
import { useHistory } from 'react-router'

export const MovieList = () => {

    const { movies, getMovies } = useContext(MovieContext)
    

    const history = useHistory()


    useEffect(() => {
        getMovies()
    }, [])

    return (
        <>
            <header className="movie__new">
                <h1>WhoDunIt Movies</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/movies/new" })
                    }}>Add New Movie</button>
            </header>

            <article className="movies">
                {
                    movies.map(movie => {

                        return <section key={`movie--${movie.id}`} className="movie">

                            
                            <div className="movie__image">
                            <img src={movie.movie_image_url}></img></div>
                            <div className="movie__name">Movie:  {movie.name} by {movie.director}</div>

                            <div className="movie__year">Created on:  {movie.year} </div>
                            <div className="movie__rating">Rated:  {movie.rating} </div>

                            <div className="movie__description">{movie.description} </div>

                            <div className="movie__genre">{movie.genre.label} </div>

                            <div className="movie__number_of_players">Number of players needed:   {movie.number_of_players} </div>

                            <div className="movie__suspect">Who did it?:  {movie.suspect.name}</div>

                            <div className="movie__player">Whose playing?  {movie.player.user.username} </div>

                            <div className="movie__edit">
                                <button className="btn btn-3"
                                    onClick={() => {
                                        history.push(`/movies/${movie.id}/edit`)
                                    }}>Edit</button>
                            </div>

                        </section>
                    })
                }

            </article>
        </>
    )
}