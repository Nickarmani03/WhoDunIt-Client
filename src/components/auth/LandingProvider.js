import React, { useState, createContext } from "react"

export const LandingContext = createContext()

export const LandingProvider = (props) => {

    const [landing, setLandings] = useState([])

    const [currentLanding, setcurrentLanding] = useState([])

    const getLanding = () => {
        return fetch("http://localhost:8000/landing", {
            headers: {
                Authorization: `Token ${localStorage.getItem("whodunit_token")}`,
            },
        })
            .then(res => res.json())
            .then(setLandings)
    }

    const getLandingById = (id) => {
        return fetch(`http://localhost:8000/landing/${id}`, {
            headers: {
                Authorization: `Token ${localStorage.getItem("whodunit_token")}`,
            },
        })
            .then(res => res.json())
            .then(setcurrentLanding)
    }

    return (
        <LandingContext.Provider value={{
            landing, currentLanding, getLanding, getLandingById
        }}>
            {props.children}
        </LandingContext.Provider>
    )
}