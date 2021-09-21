import React, { useContext, useState, useEffect } from "react"
import { SuspectContext } from "./SuspectProvider"
import { useHistory, useParams } from 'react-router'
import "./Suspect.css"

export const EditSuspectForm = () => {
    // Use the required context providers for data

    const { getGuilts, guilts, editSuspect, getSuspectById } = useContext(SuspectContext)

    const history = useHistory()

    const { suspectId } = useParams();

    // Component state
    const [currentSuspect, setCurrentSuspect] = useState({
        name: "",
        guiltyId: 0,
    })

    useEffect(() => {
        getGuilts()
    }, [])

    useEffect(() => {
        if (suspectId) {
            getSuspectById(suspectId).then((suspect) => {
                setCurrentSuspect({
                    id: parseInt(suspectId),
                    name: suspect.name,
                    guiltyId: suspect.guilty.id,

                })
            })
        }
    }, [suspectId])


    const changeSuspectState = (event) => {
        const newSuspectState = { ...currentSuspect }// Create copy
        newSuspectState[event.target.name] = event.target.value// Modify copy
        setCurrentSuspect(newSuspectState)// Set copy as new Suspect state
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
                    <label htmlFor="guilty">Type of Suspect: </label>
                    <select type="select" name="guiltyId" required autoFocus className="form-control"
                        value={currentSuspect.guiltyId} onChange={changeSuspectState}>
                        <option value="0">Are they Guilty Of a Crime?  </option>
                        {guilts.map((guilty => {
                            return <option key={guilty.id} value={guilty.id}>
                                {guilty.label}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>


            <button
                type="submit"
                onClick={(evt) => {
                    // Prevent form from being submitted
                    evt.preventDefault()

                    editSuspect({
                        id: currentSuspect.id,
                        name: currentSuspect.name,
                        guiltyId: parseInt(currentSuspect.guiltyId)
                    })
                        // Send POST request to your API

                        .then(() => history.push("/suspect"));
                }}
                className="btn btn-1"> Edit </button>
        </form>
    )
}


// const clearForm = () => { 
//     document.getElementById("categoryForm").reset();
//   }

