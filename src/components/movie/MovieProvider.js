import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [genres, setGenres] = useState([])
    const [suspects, setSuspects] = useState([])

    const getMovies = () => {
        return fetch("http://localhost:8000/movie", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
        .then(res => res.json())
        .then(setMovies)
    }

    const getMovieById = (movieId) => {
		return fetch(`http://localhost:8000/movie/${movieId}`, {
			headers: {
				Authorization: `Token ${localStorage.getItem("whodunit_token")}`,
			},
		})
			.then((response) => response.json())
	};

    const getGenres = () => {
        return fetch("http://localhost:8000/genres", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
         .then(res => res.json()) //turn it into json
        .then(setGenres)
    }

    const getSuspects = () => {
        return fetch("http://localhost:8000/suspect", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
         .then(res => res.json()) //turn it into json
        .then(setSuspects)
    }

    const createMovie = movie => {
        return fetch("http://localhost:8000/movie", {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(movie)
        })
        .then(getMovies)
       }

     const editMovie = movie => {
        return fetch(`http://localhost:8000/movie/${movie.id}`, {
            method: "PUT",
            headers:{
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(movie)
        })
        .then(getMovies)
       }

    return (
        <MovieContext.Provider value={{  movies, getMovies, genres, getGenres, suspects, getSuspects, createMovie, editMovie, getMovieById}} >
            {props.children}
        </MovieContext.Provider>
    )
}