import React, { useContext, useState, useEffect } from "react"
import { SuspectContext } from "./SuspectProvider"
import { useHistory } from 'react-router'
import "./Movie.css"

export const SuspectForm = () => {
    // Use the required context providers for data

    const {  suspects,  getSuspects} = useContext(SuspectContext)


    const history = useHistory()

    // Component state
    const [currentSuspect, setSuspect] = useState({

        name: "",       
        description: "",        
        isGuilty: ""
      
    })

    useEffect(() => {
        getSuspects()
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
                    <label htmlFor="suspect">Suspect: </label>
                    <select type="select" name="suspectId" required autoFocus className="form-control"
                        value={currentSuspect.suspectId} onChange={changeSuspectState}>
                        <option value="0">Select a Suspect</option>
                        {suspects.map((suspect => {
                            return <option key={suspect.id} value={suspect.id}>
                                {suspect.name}
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
                        suspectId: parseInt(currentSuspect.suspectId)
                    })
                        // Send POST request to your API

                        .then(() => history.push("/suspect"))
                }}
                className="btn btn-1"> Create Suspect </button>
        </form>
    )
}