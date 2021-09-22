import React, { useState, createContext } from 'react'

export const MovieSuspectContext = createContext()

export const MovieSuspectProvider = (props) => {
    const [movieSuspects, setMovieSuspects] = useState([])

    const getMovieSuspects = () => {
        return fetch("http://localhost:8000/movie_suspect", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json())
            .then(setMovieSuspects)
    }
    const createMovieSuspect = movieSuspect => {
        return fetch("http://localhost:8000/movie_suspect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(movieSuspect)
        })
            .then(getMovieSuspects)
    }

    

    return (
        <MovieSuspectContext.Provider value={
            {
                movieSuspects, getMovieSuspects, createMovieSuspect
            }
        }>
            {props.children}
        </MovieSuspectContext.Provider>
    )
}
