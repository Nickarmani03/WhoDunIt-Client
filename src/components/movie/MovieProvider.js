import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([])
    const [movieTypes, setMovieTypes] = useState([])

    const getMovies = () => {
        return fetch("http://localhost:8000/movies", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
        .then(res => res.json())
        .then(setMovies)
    }

    const getMovieById = (movieId) => {
		return fetch(`http://localhost:8000/movies/${movieId}`, {
			headers: {
				Authorization: `Token ${localStorage.getItem("whodunit_token")}`,
			},
		})
			.then((response) => response.json())
	};

    const getMovieTypes = () => {
        return fetch("http://localhost:8000/movietypes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
         .then(res => res.json()) //turn it into json
        .then(setMovieTypes)
    }

    const createMovie = movie => {
        return fetch("http://localhost:8000/movies", {
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
        return fetch(`http://localhost:8000/movies/${movie.id}`, {
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
        <MovieContext.Provider value={{  movies, getMovies, movieTypes, getMovieTypes, createMovie, editMovie, getMovieById}} >
            {props.children}
        </MovieContext.Provider>
    )
}