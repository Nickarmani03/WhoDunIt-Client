import React, { useContext, useState, useEffect } from "react"
import { SuspectContext } from "./SuspectProvider"
import { useHistory } from 'react-router'
import "./Movie.css"

export const SuspectForm = () => {
    // Use the required context providers for data

    const { suspects, getSuspects, guiltys, getGuiltys, } = useContext(SuspectContext)


    const history = useHistory()

    // Component state
    const [currentSuspect, setSuspect] = useState({

        name: "",
        description: "",
        guiltyId: 0,

    })

    useEffect(() => {
        getSuspects().then(getGuiltys())
    }, [])



    const changeSuspectState = (event) => {
        const newSuspect = { ...currentSuspect }// Create copy
        newSuspect[event.target.name] = event.target.value// Modify copy
        setSuspect(newSuspect)// Set copy as new Suspect state
    }



    return (
        <form className="suspectForm">
            <h2 className="suspectForm__title"> New Suspect</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name of the Suspect: </label>
                    <input type="text" name="name" required autoFocus className="form-control"
                        placeholder="Name of the Suspect"
                        value={currentSuspect.name}
                        onChange={changeSuspectState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        placeholder="Describe the Suspect"
                        value={currentSuspect.description}
                        onChange={changeSuspectState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="title">Type of Movie: </label>
                    <select type="select" name="guiltyId" required autoFocus className="form-control"
                        value={currentMovie.guiltyId} onChange={changeMovieState}>
                        <option value="0">Select a Guilty Status</option>
                        {guiltys.map((guilty => {
                            return <option key={guilty.id} value={guilty.id}>
                                {guilty.label}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>

            <button type="submit"
                onClick={(evt) => {
                    // Prevents form from being submitted
                    evt.preventDefault()

                    createSuspect({//whats being passed to the back end
                        name: currentSuspect.name,
                        description: currentSuspect.description,
                        guiltyId: parseInt(currentMovie.guiltyId),
                        // suspectId: parseInt(currentSuspect.suspectId)
                    })
                        // Send POST request to your API

                        .then(() => history.push("/suspect"))
                }}
                className="btn btn-1"> Create Suspect </button>
        </form>
    )
}