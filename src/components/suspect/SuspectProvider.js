import React, { useState, createContext } from 'react'

export const SuspectContext = createContext()

export const SuspectProvider = (props) => {

    const [suspects, setSuspects] = useState([])
    const [guilty, setGuilty] = useState([])

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

    const getGuilty = () => {
        return fetch("http://localhost:8000/guilty", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("whodunit_token")}`
            }
        })
            .then(res => res.json()) //turn it into json
            .then(setGuilty)
    };

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


    return (
        <SuspectContext.Provider value={{ suspects, getSuspects, guilty, getGuilty, createSuspect, getSuspectById }} >
            {props.children}
        </SuspectContext.Provider>
    )
}