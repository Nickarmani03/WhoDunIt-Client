import React, { useContext, useEffect } from "react"
import { SuspectContext } from "./SuspectProvider.js"
import { useHistory } from 'react-router'

export const SuspectList = () => {

    const { suspects, getSuspects } = useContext(SuspectContext)
    

    const history = useHistory()


    useEffect(() => {
        getSuspects()
    }, [])

    return (
        <>
            <header className="suspect__new">
                <h1>WhoDunIt Suspects</h1>
                <button className="btn btn-2 btn-sep icon-create"
                    onClick={() => {
                        history.push({ pathname: "/suspect/new" })
                    }}>Add New Suspect</button>
            </header>

            <article className="suspects">
                {
                    suspects.map(suspect => {

                        return <section key={`suspect--${suspect.id}`} className="suspect">

                            <div className="suspect__name">Suspect:  {suspect.name}</div>

                            <div className="suspect__description">{suspect.description} </div>

                            <div className="suspect__guilty">{suspect.guilty.label} </div>

                           

                            <div className="suspect__edit">
                                <button className="btn btn-3"
                                    onClick={() => {
                                        history.push(`/suspect/${suspect.id}/edit`)
                                    }}>Edit</button>
                            </div>

                        </section>
                    })
                }

            </article>
        </>
    )
}