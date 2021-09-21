import React, { useState, createContext } from 'react'

export const SuspectContext = createContext()

export const SuspectProvider = (props) => {

    const [suspects, setSuspects] = useState([])
    const [guilts, setGuilts] = useState([])
    const [movies, setMovies] = useState([])

    const getSuspects = () => {
        return fetch("http://localhost:8000/suspect", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json()) //turn it into json
            .then(setSuspects)
    }

    const getSuspectById = (suspectId) => {
        return fetch(`http://localhost:8000/suspect/${suspectId}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("whodunit_token")}`,
            },
        })
            .then((response) => response.json())
    };

    const getGuilts = () => {
        return fetch("http://localhost:8000/guilty", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json()) //turn it into json
            .then(setGuilts)
    };

    const getMovies = () => {
        return fetch("http://localhost:8000/movie", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json())
            .then(setMovies)
    }

    const createSuspect = suspect => {
        return fetch("http://localhost:8000/suspect", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(suspect)
        })
            .then(getSuspects)
    }

    const editSuspect = suspect => {
        return fetch(`http://localhost:8000/suspect/${suspect.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            },
            body: JSON.stringify(suspect)
        })
            .then(getSuspects)
    }


    return (
        <SuspectContext.Provider value={{ movies, getMovies, suspects, getSuspects, editSuspect, guilts, getGuilts, createSuspect, getSuspectById }} >
            {props.children}
        </SuspectContext.Provider>
    )
}