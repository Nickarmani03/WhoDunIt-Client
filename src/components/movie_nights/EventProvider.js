import React, { useState, createContext } from 'react'

export const MovieNightContext = createContext()

export const MovieNightProvider = (props) => {
    const [movieNights, setMovieNights] = useState([])

    const getMovieNights = () => {
        return fetch("http://localhost:8000/movie_night", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json())
            .then(setMovieNights)
    }
    const createMovieNight = movieNight => {
        return fetch("http://localhost:8000/movie_night", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(movieNight)
        })
            .then(getMovieNights)
    }

    const leaveMovieNight = movieNightId => {
        return fetch(`http://localhost:8000/movie_night/${ movieNightId }/signup`, {
            method: "DELETE",
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`,
                "Content-Type": "application/json"
            }
        })
            // .then(response => response.json())
            .then(getMovieNights)
    }
    
    const joinMovieNight = movieNightId => {
        return fetch(`http://localhost:8000/movie_night/${ movieNightId }/signup`, {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`,
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(getMovieNights)
    }

    return (
        <MovieNightContext.Provider value={
            {
                movieNights, getMovieNights, createMovieNight , joinMovieNight, leaveMovieNight
            }
        }>
            {props.children}
        </MovieNightContext.Provider>
    )
}
